import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './components/App';
//import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';

import modules from './modules';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(modules, window.devToolsExtension && window.devToolsExtension());


ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, 
document.getElementById('root'));
//registerServiceWorker();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
