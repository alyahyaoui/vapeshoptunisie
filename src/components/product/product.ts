import Component from '../../component.js';

class Product extends Component {
	constructor(
        parentId: string,
		public name: string,
        shouldRender?:boolean,
		public type?: string,
		public price?: number,
		public imgUrl?: string,
		public Quantity?: number,
        ) {
		super(parentId,shouldRender);
	}
	render() {
		const product = this.createComponent('li', 'product-item');
		product.innerHTML = `
        <h6>${this.name}</h6>
        <h6>${this.type}</h6>
        <h6>${this.price}</h6>
        <h6>${this.Quantity}</h6>
        `;
	}
}
export default Product