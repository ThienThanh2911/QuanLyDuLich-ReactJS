
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { reducer } from './UserReducer';
import { Provider } from 'react-redux';

const store = createStore(reducer)

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

render()
store.subscribe(render)

reportWebVitals();
