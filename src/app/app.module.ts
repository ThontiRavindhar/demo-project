import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { IntervalDirective } from './interval.directive';
import { MessageComponent } from './message/message.component';
//import { ProductService } from './products/product.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ProductsComponent, IntervalDirective, MessageComponent ],
  bootstrap:    [ AppComponent ],
  //providers: [ProductService]
})
export class AppModule { }
