import React from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';
import './toolbox/theme.css';
import theme from './toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index';
import {BrowserRouter} from 'react-router-dom';

const createStoreWithMiddleware = createStore(rootReducer);//applyMiddleware()(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware}><BrowserRouter><ThemeProvider theme={theme}><App /></ThemeProvider></BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
