import Component from '../component.js'

class NavMenu extends Component {
    constructor(parentId: string) {
        super(parentId)
    }
    render() {
        this.createComponent('div','nav-menu')
    }
}
export default NavMenu