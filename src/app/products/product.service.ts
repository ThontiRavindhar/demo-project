import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products'
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';

@Injectable(
  /*{
  providedIn: 'root'
  } */
)
export class ProductService {

  constructor(private messageService: MessageService) {}

  getProducts(): Observable<Product[]> {
    this.messageService.addMsg("ProductService: fetched products");
    return of(PRODUCTS);
  }

}