import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import ComingSoon from "react-coming-soon";
import Hello from './Hello'
import 'tachyons';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Hello greeting={'Hej hej prospective user, How are you doing?'} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
