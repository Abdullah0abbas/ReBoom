import { Component } from '@angular/core';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {
  products = [
    { name: 'PS4', price: 200, image: 'assets/products/ps4.jpg' },
    { name: 'Billiards', price: 200, image: 'assets/products/billiards.jpg' }
  ];
}
