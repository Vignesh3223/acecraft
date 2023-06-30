import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AceServiceService } from 'src/services/ace-service.service';
import { CartserviceService } from 'src/services/cartservice.service';
import { Cart } from 'src/models/acecraft';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  itemId!: number;
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
      title: 'Product added successfully'
    })
    this.cartserv.getCount();
  }

  ngOnInit() {
    this.itemId = this.actRoute.snapshot.params['id'];

    this.aceService.getUniformbyId(this.itemId).subscribe((response) => {
      console.log(response);
      this.itemsData = response;
      console.log(this.itemsData);
    });
  }

}
