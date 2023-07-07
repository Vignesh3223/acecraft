import { Component } from '@angular/core';
//Honda interface from model
import { Honda } from 'src/models/acecraft';
//AceService from service
import { AceServiceService } from 'src/services/ace-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  //variable to store products in Honda 
  products: Honda[] | any;

  constructor(private aceService: AceServiceService) { }

  ngOnInit() {
    //function to display products
    this.aceService.getHonda().subscribe(
      (response) => this.products = response);
  }


}
