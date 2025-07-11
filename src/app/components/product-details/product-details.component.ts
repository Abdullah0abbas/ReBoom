import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsService } from '../../services/product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId: string | null = null;
  product: any = null;

  constructor(private route: ActivatedRoute, private productDetailsService: ProductDetailsService) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.product = this.productDetailsService.getProductById(this.productId);
  }
}
