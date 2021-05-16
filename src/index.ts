import Header from './components/layouts/header.js';
import Footer from './components/layouts/footer.js';
import Main from './components/layouts/main.js';
import Drawer from './components/layouts/drawer.js';

class App {
	static init() {
		new Header('root');
		new Footer('root');
		new Main('root');
		new Drawer('root');
	}
}

App.init();
