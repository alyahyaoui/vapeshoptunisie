import { Attribute } from './utils.js';
class Component {
	constructor(public parentId: string, shouldRender = true) {
	 	shouldRender &&	this.render();
	}

	createComponent(
		tag: string,
		classNames?: string,
		attributeInfos?: Attribute,
	) {
		const component = document.createElement(tag);

		classNames && component.classList.add(classNames);
		attributeInfos &&
			component.setAttribute(attributeInfos.name, attributeInfos.value);
		document.getElementById(this.parentId)!.appendChild(component);
		return component;
	}

	render() {}
}
export default Component;
