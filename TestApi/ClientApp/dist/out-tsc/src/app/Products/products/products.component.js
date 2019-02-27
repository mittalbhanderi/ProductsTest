import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productsService) {
        this.productsService = productsService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products$ = this.productsService.getProducts();
        this.products$.subscribe(function (data) {
            _this.products = data;
            console.log(data);
        }, function (error) { return console.log(error); });
    };
    ProductsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-products',
            templateUrl: './products.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [ProductsService])
    ], ProductsComponent);
    return ProductsComponent;
}());
export { ProductsComponent };
//# sourceMappingURL=products.component.js.map