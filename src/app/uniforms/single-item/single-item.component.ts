import { Component,Input,OnInit } from '@angular/core';
//router
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent implements OnInit {
  @Input() item: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  //variable to store product id
  itemId!: number;

  //function to view product based on id
  viewItem(id: number) {
    this.itemId = id;
    this.router.navigate(['viewItem/' + id]);
  }
}

