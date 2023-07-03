import { Component } from '@angular/core';
import { Uniforms } from 'src/models/acecraft';
import { AceServiceService } from 'src/services/ace-service.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {

  products: Uniforms[] | any;

  constructor(private aceService: AceServiceService,) { }


  ngOnInit() {
    this.aceService.getUniform().subscribe(
      (response) => this.products = response);
  }
}
