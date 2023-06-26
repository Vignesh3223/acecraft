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

  ngOnInit() {
    this.aceService.getHonda().subscribe(
      (response) => this.hondalist = response);
  }
}