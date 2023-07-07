import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/services/cartservice.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartcount: number = 0;
  cartitems: any = [];

  auth: boolean = false;

  constructor(private cartserv: CartserviceService, private authService: UserService) { }

  ngOnInit() {
    this.authService.authSubject.subscribe(
      data => {
        this.auth = data;
      }
    );

    this.cartserv.getCartItems().subscribe((res) => {
      this.cartitems = res;
      this.cartcount = this.cartitems.length;
    });
  }
}
