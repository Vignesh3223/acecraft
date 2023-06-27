import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AceServiceService } from 'src/services/ace-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productId!: number;
  productsData: any;

  constructor(
    private aceService: AceServiceService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productId = this.actRoute.snapshot.params['id'];

    this.aceService.getHondabyId(this.productId).subscribe((response) => {
      console.log(response);
      this.productsData = response;
      console.log(this.productsData);
    });
  }
}
