import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

/* Modules */
import { HttpClientModule } from '@angular/common/http'; 
import { MatCardModule } from '@angular/material/card';

/* App Root */
import { AppComponent } from './app.component';

/* Components */
import { ProductsComponent } from './Products/products/products.component';
import { ProductComponent } from './Products/product/product.component';

/* Services */
import { ProductsService } from './Products/products.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule
  ],
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
