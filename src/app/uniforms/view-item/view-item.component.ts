import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AceServiceService } from 'src/services/ace-service.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  itemId!: number;
  itemsData: any;

  constructor(
    private aceService: AceServiceService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.itemId = this.actRoute.snapshot.params['id'];

    this.aceService.getUniformbyId(this.itemId).subscribe((response) => {
      console.log(response);
      this.itemsData = response;
      console.log(this.itemsData);
    });
  }

}
