import React        from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { render }   from 'react-dom';
import { Provider } from 'react-redux';
import thunk        from 'redux-thunk';
import reducers     from './stores';
import RouterMap from './router/routerMap';

global.AJAX = require('./utils/intensifyAjax/index');
global.Common = require('./utils/common/index');

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : h => h

render(
  <Provider store={createStore(reducers, compose( applyMiddleware(thunk), reduxDevtools ))}>
    <RouterMap />
  </Provider>,
  document.getElementById('app')
);
