import { Component } from '@angular/core';
//Uniforms interface from model
import { Uniforms } from 'src/models/acecraft';
//AceService from service
import { AceServiceService } from 'src/services/ace-service.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {

  //variable to store data from json
  products: Uniforms[] | any;

  constructor(private aceService: AceServiceService,) { }


  ngOnInit() {
    //function to fetch data from json
    this.aceService.getUniform().subscribe(
      (response) => this.products = response);
  }
}
