import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  private products = [
    {
      id: '1',
      name: 'Poco X6 Pro',
      image: 'assets/images/poco-x6-pro.jpg',
      specs: [
        'Display: 6.67-inch, 1220 x 2712 pixels, OLED, 120Hz refresh rate',
        'Processor: Mediatek Dimensity 8300 Ultra (4nm)',
        'Operating System: Android 14 with HyperOS',
        'RAM & Storage: 12GB RAM + 512GB storage',
        'Battery: 5000mAh, 67W fast charging',
        'Rear Cameras: 64MP (main, f/1.7, OIS), ultrawide f/2.2, 2MP macro f/2.4',
        'Front Camera: 16MP, f/2.4'
      ]
    }
  ];

  constructor() { }

  getProductById(id: string | null) {
    return this.products.find(p => p.id === id);
  }
}
