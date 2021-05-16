import { CreateAttribute } from './../../utils.js';
import Component from '../../component.js'
import NavMenu from '../nav-menu.js'

class Header extends Component {
    constructor(parentId: string) {
        super(parentId)
    }
    render() {
    const header = this.createComponent('header','main-header',new CreateAttribute('id','main-header'));
        header.innerHTML = `
        <h6 class="logo">Yonko Vape</h6>
        <h6 class="search">search</h6>
        <h6 class="cart">cart</h6>
        <h6 class="login">login</h6>
    `
        
    new NavMenu('main-header')
}
}
export default Header