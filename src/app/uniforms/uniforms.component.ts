import { Component } from '@angular/core';
//AceService from service
import { AceServiceService } from 'src/services/ace-service.service';

@Component({
  selector: 'app-uniforms',
  templateUrl: './uniforms.component.html',
  styleUrls: ['./uniforms.component.css']
})
export class UniformsComponent {

  //variable to store the count of products
  itemcount: number | any;

  constructor(private aceService: AceServiceService) { }

  //variable to fetch and store the json data
  uniformlist: any[] = [];

  //variables used for sorting
  sortParam: any;
  sortDirection: any;
  optionSelected: any;

  //function to sort the products
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
    //function to fetch the products from json
    this.aceService.getUniform().subscribe(
      (response) => this.uniformlist = response);

    //function to fetch the count of products
    this.aceService.getUniform().subscribe((res) => {
      this.itemcount = res.length;
    });
  }
}
