import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import StoreProvider from './Root/StoreProvider';
import { Provider } from 'mobx-react';
import RootStore from './Root/RootStore';


ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

