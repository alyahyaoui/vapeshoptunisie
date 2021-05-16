var Component = /** @class */ (function () {
    function Component(parentId, shouldRender) {
        if (shouldRender === void 0) { shouldRender = true; }
        this.parentId = parentId;
        shouldRender && this.render();
    }
    Component.prototype.createComponent = function (tag, classNames, attributeInfos) {
        var component = document.createElement(tag);
        classNames && component.classList.add(classNames);
        attributeInfos &&
            component.setAttribute(attributeInfos.name, attributeInfos.value);
        document.getElementById(this.parentId).appendChild(component);
        return component;
    };
    Component.prototype.render = function () { };
    return Component;
}());
export default Component;
