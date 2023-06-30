import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/services/cartservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartcount: number = 0;

  constructor(private cartserv: CartserviceService) { }

  ngOnInit() {
    this.cartserv.getCartItems().subscribe((res) => {
      this.cartcount = res.length;
    });
  }
}
