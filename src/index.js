/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/**
 * Local import
 */
import App from 'src/components/App';

import store from 'src/store';

/**
 * Render
 */
// 1. Root component
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);
// 2. DOM target
const target = document.getElementById('root');

// Render : REACT to DOM
render(rootComponent, target);
