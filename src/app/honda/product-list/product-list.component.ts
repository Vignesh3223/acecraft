import { Component } from '@angular/core';
import { Honda } from 'src/models/acecraft';
import { AceServiceService } from 'src/services/ace-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Honda[] | any;

  constructor(private aceService: AceServiceService) { }

  ngOnInit() {
    this.aceService.getHonda().subscribe(
      (response) => this.products = response);
  }

  
}
