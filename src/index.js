import App from './app';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render( <Provider store={store} > <App /> </Provider> , document.getElementById("root"));

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
    module.hot.accept();
}
