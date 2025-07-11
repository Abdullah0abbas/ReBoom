import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  admins = [
    { name: 'Hey Alice', image: 'assets/users/alice.jpg' },
    { name: 'Jon dan', image: 'assets/users/jon.jpg' },
    { name: 'Kathy smith', image: 'assets/users/kathy.jpg' }
  ];
}
