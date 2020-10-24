import React from 'react';
import ReactDOM from 'react-dom';
import  { BrowserRouter, Route, Switch} from "react-router-dom"
import './index.css';
import * as serviceWorker from './serviceWorker';
import './tailwind.output.css';
// import Home from './pages/Home';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
