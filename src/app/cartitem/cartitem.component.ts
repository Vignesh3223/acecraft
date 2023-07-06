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

  paymentHandler: any = null;

  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51NQoOgSIF8NYMtoSsE3ybqgFcjiafBmE6SgRG0LOoz02qHSXlYDYWfB0wcZzauNoi8fpI8CJ7WQCOqcIeBJG72Pf00sQlgKl12',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: 'success',
          title: 'Order Placed Successfully',
          background: '#E6F9ED',
          color: '#006730'
        });
        this.cartserv.removeItemFromCart();
      }
    });
    paymentHandler.open({
      name: 'Order',
      description: 'Order Details',
      amount: amount,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51NQoOgSIF8NYMtoSsE3ybqgFcjiafBmE6SgRG0LOoz02qHSXlYDYWfB0wcZzauNoi8fpI8CJ7WQCOqcIeBJG72Pf00sQlgKl12',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            const Toast = Swal.mixin({
              toast: true,
              position: 'top',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });
            Toast.fire({
              icon: 'error',
              title: 'Error in generating Stripe Payment Gateway',
              background: '#FCEBE9',
              color: '#751A0C'
            });
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }

  constructor(private cartserv: CartserviceService, private router: Router) { }

  carts: Cart = {
    id: 0,
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
        background: '#FCEBE9',
        color: '#751A0C'
      }).then(() => {
        this.router.navigate(['/cartitems']);
      })
    }
    item.quantity--;
    this.cartserv.updateCart(item)
  }

  delete(deleteItem: Cart) {
    this.cartserv.removeItemFromCart(deleteItem).subscribe(
      () => console.log(deleteItem.id)
    );
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      title: 'Product is removed from cart successfully',
      background: '#E6F9ED',
      color: '#006730'
    })
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.invokeStripe();
    this.cartserv.getCartItems().subscribe(
      (response) => {
        this.cart = response;
        console.log(this.cart);
      }
    )
  }
}
