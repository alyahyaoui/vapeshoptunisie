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
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product(parentId, name, shouldRender, type, price, imgUrl, Quantity) {
        var _this = _super.call(this, parentId, shouldRender) || this;
        _this.name = name;
        _this.type = type;
        _this.price = price;
        _this.imgUrl = imgUrl;
        _this.Quantity = Quantity;
        return _this;
    }
    Product.prototype.render = function () {
        var product = this.createComponent('li', 'product-item');
        product.innerHTML = "\n        <h6>" + this.name + "</h6>\n        <h6>" + this.type + "</h6>\n        <h6>" + this.price + "</h6>\n        <h6>" + this.Quantity + "</h6>\n        ";
    };
    return Product;
}(Component));
export default Product;
