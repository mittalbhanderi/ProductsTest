import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;
  
  constructor() { }

  ngOnInit() {
  }

}
