import { Component } from '@angular/core';
//AceService from service
import { AceServiceService } from 'src/services/ace-service.service';

@Component({
  selector: 'app-honda',
  templateUrl: './honda.component.html',
  styleUrls: ['./honda.component.css']
})
export class HondaComponent {

  //variable to store count of total items in cart
  itemcount: number | any;

  constructor(private aceService: AceServiceService) { }

  //variable to store the products in json
  hondalist: any[] = [];

  //variables to sort the products
  sortParam: any;
  sortDirection: any;
  optionSelected: any;

  //function for sorting purpose
  onOptionsSelected(event: any) {
    console.log(event.target.value);
    this.optionSelected = event.target.value;
    if (this.optionSelected === 'l-h') {
      (this.sortParam = 'price'), (this.sortDirection = 'asc');
    }
    else if (this.optionSelected === 'h-l') {
      (this.sortParam = 'price'), (this.sortDirection = 'desc');
    }
    else if (this.optionSelected === 'n-asc') {
      (this.sortParam = 'text'), (this.sortDirection = 'asc');
    }
    else if (this.optionSelected === 'n-desc') {
      (this.sortParam = 'text'), (this.sortDirection = 'desc');
    }
  }

  ngOnInit() {
    //function to fetch cart items
    this.aceService.getHonda().subscribe(
      (response) => this.hondalist = response);

    //function to fetch count of cart items
    this.aceService.getHonda().subscribe((res) => {
      this.itemcount = res.length;
    });
  }
}