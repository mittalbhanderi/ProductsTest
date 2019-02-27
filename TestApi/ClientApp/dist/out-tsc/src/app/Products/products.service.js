import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var Product = /** @class */ (function () {
    function Product(id, productName, modelCode, serialNumber) {
        this.id = id;
        this.productName = productName;
        this.modelCode = modelCode;
        this.serialNumber = serialNumber;
    }
    return Product;
}());
export { Product };
var FETCH_LATENCY = 500;
var API_URL = 'http://localhost:50324/v1';
var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
        console.log('ProductsService instance created.');
    }
    ProductsService.prototype.getProducts = function () {
        return this
            .http
            .get(API_URL + "/products");
    };
    ProductsService.prototype.ngOnDestroy = function () { console.log('ProductsService instance destroyed.'); };
    ProductsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProductsService);
    return ProductsService;
}());
export { ProductsService };
//# sourceMappingURL=products.service.js.map