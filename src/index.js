import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import broceTheme from './themes/broce';
import rootReducer from './scripts/reducers';
import Root from './scripts/components';

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(broceTheme)}>
    <Provider store={createStore(rootReducer)}>
      <Root />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
