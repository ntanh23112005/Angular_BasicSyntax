import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  productId: string | null = null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
    });
  }
}
