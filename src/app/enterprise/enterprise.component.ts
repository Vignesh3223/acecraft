import { Component } from '@angular/core';

interface EventItem {
  id?: number;
  status?: string;
  image?: string;
}

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent {
  events: EventItem[];

  constructor() {
    this.events = [
      { id: 1, status: 'Single line brief', image: '/assets/images/icon-1.png' },
      { id: 2, status: ' Mind mapping', image: '/assets/images/icon-2.png' },
      { id: 3, status: 'Design and details', image: '/assets/images/icon-3.png' },
      { id: 4, status: 'Sampling', image: '/assets/images/icon-4.png' },
      { id: 5, status: 'Manufacturing', image: '/assets/images/icon-5.png' },
      { id: 6, status: 'Delivery', image: '/assets/images/icon-6.png' },
    ];
  }
}
