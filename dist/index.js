import Header from './components/layouts/header.js';
import Footer from './components/layouts/footer.js';
import Main from './components/layouts/main.js';
import Drawer from './components/layouts/drawer.js';
var App = /** @class */ (function () {
    function App() {
    }
    App.init = function () {
        new Header('root');
        new Footer('root');
        new Main('root');
        new Drawer('root');
    };
    return App;
}());
App.init();
