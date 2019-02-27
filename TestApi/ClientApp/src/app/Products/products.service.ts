import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class Product {
  constructor(public id: number, 
              public productName: string,
              public modelCode: string, 
              public serialNumber: string){

  }

}

const FETCH_LATENCY = 500;
const API_URL: string = 'http://localhost:50324/v1';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private http: HttpClient) { console.log('ProductsService instance created.'); }

  getProducts(): Observable<Product[]> {
    return this
            .http
            .get<Product[]>(`${API_URL}/products`);
  }
  
}
