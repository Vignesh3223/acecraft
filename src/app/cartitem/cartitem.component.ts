import { Component, OnInit } from '@angular/core';
import { CartserviceService } from 'src/services/cartservice.service';
import { Cart } from 'src/models/acecraft';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {

  constructor(private cartserv: CartserviceService, private router: Router) { }

  carts: Cart = {
    id:0,
    text: '',
    image: '',
    size: 1,
    size1: '',
    gender: '',
    department: '',
    quantity: 1,
    price: 1,
    totalprice: 1,
    originalprice: 1,
    offerpercent: 1
  }
  cartData: any = [];
  totalprice: number = 0;
  quantity = 1;


  totalPrice(data: any) {
    debugger
    const initialValue = 0;
    this.cartData = data
    const a = this.cartData.reduce((sum: any, item: any) => sum + (item.price * item.quantity), initialValue);
    return a;
  }

  cart: Cart[] = [];
  increase(item: Cart) {
    item.quantity++;
    this.cartserv.updateCart(item)
  }
  decrease(item: Cart) {
    if (item.quantity <= 1) {
      this.delete(item)
      Swal.fire({
        title: "Your product has been removed",
        icon: "warning",
      }).then(() => {
        this.router.navigate(['/cartitems']);
      })
    }
    item.quantity--;
    this.cartserv.updateCart(item)
  }

  delete(deleteItem: Cart) {
    this.cartserv.removeItemFromCart(deleteItem).subscribe(
      () => console.log(deleteItem.text)
    );
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      title: 'Product is removed from cart successfully'
    })
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.cartserv.getCartItems().subscribe(
      (response) => {
        this.cart = response;
        console.log(this.cart);
      }
    )
  }
}
