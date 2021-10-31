import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Home from './pages/home/Home';
import WatchList from './pages/marketWatch/WatchList';

ReactDOM.render(
  <App>
    <Router>
      <Switch>
        {/* <Route path='/home' component={Home} exact /> */}
        <Route path='/watches' component={WatchList} />
      </Switch>
    </Router>
  </App>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
