import { Component, OnInit } from '@angular/core';
//ActivatedRoute , router
import { ActivatedRoute, Router } from '@angular/router';
//AceService from service
import { AceServiceService } from 'src/services/ace-service.service';
//CartService from service
import { CartserviceService } from 'src/services/cartservice.service';
//Cart interface from model
import { Cart } from 'src/models/acecraft';
//Sweetalert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  //variable to fetch product based on id
  productId!: number;

  //variable to store products from json
  productsData: any;

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
  gender: string | undefined;
  department: string | undefined;

  //function to post (add) records in cart json
  addtoCart(item: any) {
    this.carts.id = item.id;
    this.carts.text = item.text;
    this.carts.image = item.image;
    this.carts.gender = this.carts.gender;
    this.carts.department = this.carts.department;
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
    this.productId = this.actRoute.snapshot.params['id'];

    this.aceService.getHondabyId(this.productId).subscribe((response) => {
      console.log(response);
      this.productsData = response;
      console.log(this.productsData);
    });
  }
}
