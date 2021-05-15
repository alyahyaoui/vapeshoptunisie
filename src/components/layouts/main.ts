import Component from '../../component.js';

class Main extends Component {
	constructor(parentId: string) {
		super(parentId);
	}
	render() {
		this.createComponent('main', 'main');
	}
}
export default Main;
