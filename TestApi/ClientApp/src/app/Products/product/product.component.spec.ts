import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { ProductComponent } from './product.component';
import { Product } from '../products.service';

describe('ProductComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
  
  it(`should have product set`, () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const component = fixture.debugElement.componentInstance;
    component.product = new Product(1, 'Galaxy S3', 'SM-S8ABCD13', 'SN01');
    expect(component.product).toBeDefined();
    expect(component.product.id).toEqual(1);
  });
  
  it(`should have as title '1 Galaxy S3'`, () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const component = fixture.debugElement.componentInstance;
    component.product = new Product(1, 'Galaxy S3', 'SM-S8ABCD13', 'SN01');
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-card-title').textContent).toContain('1 Galaxy S3');
  });

});
