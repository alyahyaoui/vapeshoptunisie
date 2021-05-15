import Component from '../../component.js';

class Footer extends Component {
	constructor(parentId: string) {
		super(parentId);
	}
	render() {
		this.createComponent('footer', 'main-footer');
	}
}
export default Footer;
