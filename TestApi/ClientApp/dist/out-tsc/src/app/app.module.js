import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
/* App Root */
import { AppComponent } from './app.component';
/* Components */
import { ProductsComponent } from './Products/products/products.component';
import { ProductComponent } from './Products/product/product.component';
/* Services */
import { ProductsService } from './Products/products.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            imports: [
                BrowserModule,
                HttpClientModule
            ],
            declarations: [
                AppComponent,
                ProductsComponent,
                ProductComponent
            ],
            providers: [ProductsService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map