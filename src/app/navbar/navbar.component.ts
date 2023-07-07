import { Component, OnInit } from '@angular/core';
//CartServeice from service
import { CartserviceService } from 'src/services/cartservice.service';
//UserService from service
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //variable to store the count of cart items
  cartcount: number = 0;

  //variable to store the items in the cart
  cartitems: any = [];

  //variable to validate authentication to the user
  auth: boolean = false;

  constructor(private cartserv: CartserviceService, private authService: UserService) { }

  ngOnInit() {
    //function to check the authentication of the user
    this.authService.authSubject.subscribe(
      data => {
        this.auth = data;
      }
    );

    //function to get the count of cart items 
    this.cartserv.getCartItems().subscribe((res) => {
      this.cartitems = res;
      this.cartcount = this.cartitems.length;
    });
  }
}
