import { Component, OnInit } from '@angular/core';
//ActivatedRoute,router
import { ActivatedRoute, Router } from '@angular/router';
//AceService from service
import { AceServiceService } from 'src/services/ace-service.service';
//Cartservice from service
import { CartserviceService } from 'src/services/cartservice.service';
//Cart interface from model
import { Cart } from 'src/models/acecraft';
//Sweetalert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  //variable to store product id
  itemId!: number;

  //variable to store json data
  itemsData: any;

  constructor(
    private aceService: AceServiceService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private cartserv: CartserviceService
  ) { }

  carts: Cart = {
    id: 0,
    text: '',
    image: '',
    size: 0,
    size1: '',
    gender: '',
    department: '',
    quantity: 0,
    price: 0,
    totalprice: 0,
    originalprice: 0,
    offerpercent: 0
  }
  quantity: number = 1;
  size: number | undefined;
  size1: string | undefined;

  //function to add products to cart
  addtoCart(item: any) {
    this.carts.id = item.id;
    this.carts.text = item.text;
    this.carts.image = item.image;
    this.carts.size = this.carts.size;
    this.carts.size1 = this.carts.size1;
    this.carts.quantity = this.quantity;
    this.carts.price = item.price;
    this.carts.totalprice = item.totalprice;
    this.cartserv.addToCart(this.carts);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      title: 'Product added successfully',
      background: '#E6F9ED',
      color: '#006730'
    })
    this.cartserv.getCount();
  }

  ngOnInit() {
    this.itemId = this.actRoute.snapshot.params['id'];

    //function to fetch product based on id
    this.aceService.getUniformbyId(this.itemId).subscribe((response) => {
      console.log(response);
      this.itemsData = response;
      console.log(this.itemsData);
    });
  }

}
