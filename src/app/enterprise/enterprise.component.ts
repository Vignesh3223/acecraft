import { Component } from '@angular/core';

//timeline items interface
interface EventItem {
  id?: number;
  status?: string;
  image?: string;
  color?: string;
}

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent {
  events: EventItem[];

  //timeline items
  constructor() {
    this.events = [
      { id: 1, status: 'Single line brief', image: '/assets/images/icon-1.png', color: '#978F8F' },
      { id: 2, status: 'Mind mapping', image: '/assets/images/icon-2.png', color: '#978F8F' },
      { id: 3, status: 'Design and details', image: '/assets/images/icon-3.png', color: '#978F8F' },
      { id: 4, status: 'Sampling', image: '/assets/images/icon-4.png', color: '#978F8F' },
      { id: 5, status: 'Manufacturing', image: '/assets/images/icon-5.png', color: '#978F8F' },
      { id: 6, status: 'Delivery', image: '/assets/images/icon-6.png', color: '#978F8F' },
    ];
  }
}
