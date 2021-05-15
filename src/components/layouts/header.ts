import Component from '../../component.js'

class Header extends Component {
    constructor(parentId: string) {
        super(parentId)
    }
    render() {
    this.createComponent('header','main-header')
}
}
export default Header