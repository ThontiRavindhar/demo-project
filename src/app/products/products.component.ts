import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: Product = [
    new Product(1, "Clothes", "Styling"),
    new Product(2, "Mobiles", "Accessories"),
    new Product(3, "Electronics", "Appliances")
  ];

  myProduct = this.productList[0];

  constructor() { }

  ngOnInit() {
  }

}