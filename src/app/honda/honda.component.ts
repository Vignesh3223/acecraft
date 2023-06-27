import { Component } from '@angular/core';
import { AceServiceService } from 'src/services/ace-service.service';

@Component({
  selector: 'app-honda',
  templateUrl: './honda.component.html',
  styleUrls: ['./honda.component.css']
})
export class HondaComponent {

  constructor(private aceService: AceServiceService) { }

  hondalist: any[] = [];

  sortParam: any;
  sortDirection: any;
  optionSelected: any;

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
    this.aceService.getHonda().subscribe(
      (response) => this.hondalist = response);
  }
}