class Component {
	constructor(public parentId: string) {
		this.render();
	}

	createComponent(
		tag: string,
		classNames?: string,
		attributeInfos?: { name: string; value: string },
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