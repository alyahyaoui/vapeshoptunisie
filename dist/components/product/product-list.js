var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Component from '../../component.js';
import { CreateAttribute } from '../../utils.js';
import Product from './product.js';
var ProductList = /** @class */ (function (_super) {
    __extends(ProductList, _super);
    function ProductList(parentId) {
        return _super.call(this, parentId) || this;
    }
    ProductList.prototype.render = function () {
        this.createComponent('ul', 'product-list', new CreateAttribute('id', 'product-list'));
        new Product('product-list', 'box', true);
    };
    return ProductList;
}(Component));
export default ProductList;
