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
import { CreateAttribute } from './../../utils.js';
import Component from '../../component.js';
import NavMenu from '../nav-menu.js';
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(parentId) {
        return _super.call(this, parentId) || this;
    }
    Header.prototype.render = function () {
        var header = this.createComponent('header', 'main-header', new CreateAttribute('id', 'main-header'));
        header.innerHTML = "\n        <h6 class=\"logo\">Yonko Vape</h6>\n        <h6 class=\"search\">search</h6>\n        <h6 class=\"cart\">cart</h6>\n        <h6 class=\"login\">login</h6>\n    ";
        new NavMenu('main-header');
    };
    return Header;
}(Component));
export default Header;
