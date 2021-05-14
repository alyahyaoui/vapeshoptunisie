"use strict";
var Component = /** @class */ (function () {
    function Component(parentId) {
        this.parentId = parentId;
        this.render();
    }
    Component.prototype.createComponent = function (tag, classNames, attributeInfos) {
        var component = document.createElement(tag);
        classNames && component.classList.add(classNames);
        attributeInfos &&
            component.setAttribute(attributeInfos.name, attributeInfos.value);
        document.getElementById(this.parentId).appendChild(component);
    };
    Component.prototype.render = function () { };
    return Component;
}());
