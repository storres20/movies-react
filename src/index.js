import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Redux
import { Provider } from 'react-redux';
import store from './redux/configureStore';
// ****
import App from './pages/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
