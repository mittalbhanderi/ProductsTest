import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  products: Product[];

  ngOnInit() {
    this.productsService.getProducts()
                        .subscribe((data: Product[]) => {
                                        this.products = data;
                                        console.log(data);},
                              error => this.handleErrorResponse('There was a problem getting the products', error));
  }
  
  handleErrorResponse(errorMsg: string, error?: any) {
    console.log(errorMsg, error);
  }

}
