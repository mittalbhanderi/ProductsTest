import { TestBed, async } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http'; 
import { MatCardModule } from '@angular/material/card';

import { ProductsService, Product } from './Products/products.service';

import { AppComponent } from './app.component';
import { ProductsComponent } from './Products/products/products.component';
import { ProductComponent } from './Products/product/product.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, MatCardModule ],
      declarations: [
        AppComponent,
        ProductsComponent,
        ProductComponent
      ],
      providers: [ ProductsService ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Samsung Test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Samsung Test');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Samsung Test');
  });
});
