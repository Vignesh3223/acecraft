import { Component, Input, OnInit } from '@angular/core';
//router
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  @Input() products: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  productId!: number;

  //function to fetch product based on id
  viewProduct(id: number) {
    this.productId = id;
    this.router.navigate(['viewProduct/' + id]);
  }
}
