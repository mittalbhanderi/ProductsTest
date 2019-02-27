import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';

import { ProductsComponent } from './products.component';
import { ProductComponent } from '../product/product.component';
import { ProductsService, Product } from '../products.service';
import { of, Observable, throwError } from 'rxjs';

describe('ProductsComponent', () => {
  // let component: ProductsComponent;
  // let fixture: ComponentFixture<ProductsComponent>;
  let mockProductsService;

  beforeEach(async(() => {
    mockProductsService = jasmine.createSpyObj(['getProducts']);
    TestBed.configureTestingModule({
      imports: [ MatCardModule ],
      declarations: [ ProductComponent, ProductsComponent ]
    })
    .overrideProvider(ProductsService, { useValue: mockProductsService })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture: ComponentFixture<ProductsComponent> = TestBed.createComponent(ProductsComponent);
    const  component: ProductsComponent = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have products', () => {
    const fixture: ComponentFixture<ProductsComponent> = TestBed.createComponent(ProductsComponent);
    const  component: ProductsComponent = fixture.debugElement.componentInstance;
    mockProductsService.getProducts
        .and
        .returnValue(of([new Product(1, 'Galaxy S3', 'SM-S8ABCD13', 'SN01')
                        , new Product(3, 'Galaxy S8', 'SM-S8ABCD14', 'SN02')]));
    fixture.detectChanges();
    expect(component.products.length).toEqual(2);
  });

  it('should render two products with product tag', () => {
    const fixture: ComponentFixture<ProductsComponent> = TestBed.createComponent(ProductsComponent);
    mockProductsService.getProducts
        .and
        .returnValue(of([new Product(1, 'Galaxy S3', 'SM-S8ABCD13', 'SN01')
                        , new Product(3, 'Galaxy S8', 'SM-S8ABCD14', 'SN02')]));
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('app-product').length).toEqual(2);
  });

  it('should not render any products', () => {
    const fixture: ComponentFixture<ProductsComponent> = TestBed.createComponent(ProductsComponent);
    mockProductsService.getProducts
        .and
        .returnValue(of([]));
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('app-product').length).toEqual(0);
  });

  it('should log Error', () => {
    const fixture: ComponentFixture<ProductsComponent> = TestBed.createComponent(ProductsComponent);
    const  component: ProductsComponent = fixture.debugElement.componentInstance;
    mockProductsService.getProducts
        .and
        .returnValue(throwError({status: 404}));
    spyOn(component, 'handleErrorResponse');
    fixture.detectChanges();
    expect(component.handleErrorResponse).toHaveBeenCalled();
  });

});
