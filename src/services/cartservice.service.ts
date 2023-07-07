import { Injectable } from '@angular/core';
//HTTPClient
import { HttpClient } from '@angular/common/http';
//Subject
import { Subject } from 'rxjs';
//cart interface from model
import { Cart } from 'src/models/acecraft';
//Sweetalert
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  //variable to store json cart data url
  url: string = '';
  carturl = 'https://ace-6rru.onrender.com/carts';

  constructor(private http: HttpClient) {
    this.url = this.carturl + '/';
  }

  //function to add products to cart
  addToCart(product: Cart) {
    this.http.post<Cart>(this.carturl, product).subscribe((data) => {
      console.log(data);
    });
  }

  //function to fetch the products in the cart
  getCartItems() {
    return this.http.get<Cart[]>(this.carturl);
  }

  //function to update the cart items
  updateCart(product:Cart){
    let updateurl=this.carturl+'/'+product.id
    this.http.put<Cart[]>(updateurl,product).subscribe(()=>{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })
    Toast.fire({
      title: 'Quantity updated successfully',
      background: '#E6F9ED',
      color: '#006730'
    })
  }
  )
  }

  //function to remove item from the cart
  removeItemFromCart(item: any) {
    return this.http.delete(this.url + item.id);
  }

  public countSubject = new Subject<number>();
  //function to get the count of cart items
  getCount() {
    return this.getCartItems().subscribe((res) => {
     this.countSubject.next(res.length);
      console.log(this.countSubject + 'inside sub');
    });
  }
}
