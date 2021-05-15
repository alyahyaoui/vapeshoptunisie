import Component from '../../component.js';

class Drawer extends Component {
	constructor(parentId: string) {
		super(parentId);
	}
	render() {
		this.createComponent('aside', 'drawer');
	}
}
export default Drawer;
