import Component from '../../component.js';
import { CreateAttribute } from '../../utils.js';
import Product from './product.js';
class ProductList extends Component {
	constructor(parentId: string) {
		super(parentId);
	}
	render() {
		this.createComponent(
			'ul',
			'product-list',
			new CreateAttribute('id', 'product-list'),
		);
		new Product('product-list', 'box', true,);
	}
}
export default ProductList;
