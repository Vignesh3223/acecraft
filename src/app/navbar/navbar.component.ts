import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/services/cartservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartcount: number|any;

  constructor(private cartserv: CartserviceService) { }

  ngOnInit() {
    this.cartserv.getitems().subscribe((res) => {
      this.cartcount = res.length;
    });
  }
}
