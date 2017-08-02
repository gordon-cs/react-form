import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './scripts/reducers';

import Root from './scripts/components';

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
