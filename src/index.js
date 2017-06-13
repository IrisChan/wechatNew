/**
 * Created by root on 6/10/17.
 */

import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import * as reducers from './reducers';
import './styles/app.css';

const appReducers = combineReducers({ reducers });

const store = createStore(appReducers);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
