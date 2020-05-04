import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  productList: Product[];
  myProduct: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
            .subscribe(
              (products) => this.productList = products
            );
    this.myProduct = this.productList[0];
  }

}