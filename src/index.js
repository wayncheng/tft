import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './App.js';

// Build optimized icon library
import buildIconLibrary from './utils/icons';
buildIconLibrary();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
		<App />
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root')
)
