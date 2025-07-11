import { Component } from '@angular/core';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  product = {
    name: 'PS4',
    description: 'Used in good condition',
    price: 200
  };
}
