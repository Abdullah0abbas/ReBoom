import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    products = [
      {
        name: 'Poco X6 Pro',
        id:1,
        price: 250,
        image: 'assets/images/poco-x6-pro.jpg'
      },
      {
        name: 'Microsoft Surface Laptop',
        id:2,
        price: 300,
        image: 'assets/images/surface.webp'
      },
      {
        name: 'Airpods',
        id:3,
        price: 100,
        image: 'assets/images/airpods.jpg'
      },
      {
        name: 'TV ATYME 32-inch',
        id:4,
        price: 150,
        image: 'assets/images/tv.jpg'
      },
      {
        name: 'Washing Machine',
        id:5,
        price: 250,
        image: 'assets/images/washing.webp'
      },
      {
        name: 'PS4',
        id:6,
        price: 300,
        image: 'assets/images/ps4.jpg'
      },
      {
        name: 'Billiards',
        id:7,
        price: 300,
        image: 'assets/images/Billiards.jpg'
      },
      {
        name: 'Pc',
        id:8,
        price: 800,
        image: 'assets/images/pc.jpg'
      },
    ];
  }
