import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Cart } from 'src/models/acecraft';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  url: string = '';
  carturl = 'https://ace-6rru.onrender.com/carts';

  constructor(private http: HttpClient) {
    this.url = this.carturl + '/';
  }

  addToCart(product: Cart) {
    this.http.post<Cart>(this.carturl, product).subscribe((data) => {
      console.log(data);
    });
  }

  getCartItems() {
    return this.http.get<Cart[]>(this.carturl);
  }

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

  removeItemFromCart(item: any) {
    return this.http.delete(this.url + item.id);
  }

  public countSubject = new Subject<number>();
  getCount() {
    return this.getCartItems().subscribe((res) => {
     this.countSubject.next(res.length);
      console.log(this.countSubject + 'inside sub');
    });
  }
}
