import { Component } from '@angular/core';
//AceService from service
import { AceServiceService } from 'src/services/ace-service.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent {

  constructor(private aceService: AceServiceService) { }

  //variable to store data from json
  schoolsList: any[] = [];

  ngOnInit(): void {
    //function to fetch data from json
    this.aceService.getSchool().subscribe(
      (response) => this.schoolsList = response);
  }

}
