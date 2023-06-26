import { Component } from '@angular/core';
import { AceServiceService } from 'src/services/ace-service.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent {

  constructor(private aceService: AceServiceService) { }

  schoolsList: any[] = [];

  ngOnInit(): void {
    this.aceService.getSchool().subscribe(
      (response) => this.schoolsList = response);
  }

}
