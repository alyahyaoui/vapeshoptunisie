import Component from '../../component.js';
import { CreateAttribute } from '../../utils.js';
import ProductList from '../product/product-list.js';


class Main extends Component {
	constructor(parentId: string) {
		super(parentId);
	}
	render() {
		this.createComponent('main', 'main', new CreateAttribute('id','main'));
		new ProductList('main')
	}
}
export default Main;
