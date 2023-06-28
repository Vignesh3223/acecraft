import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent {
  @Input() item: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  itemId!: number;

  viewItem(id: number) {
    this.itemId = id;
    this.router.navigate(['viewItem/' + id]);
  }
}

