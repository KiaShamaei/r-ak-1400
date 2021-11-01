import './App.scss';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Home from './pages/home/Home';
import WatchList from './pages/marketWatch/WatchList';

function App(props) {
  return (
    <div className='d-flex justify-content-center align-items-center main-container '>
      <div className='app-container br3'>
        {/* #WATCHLIST */}
        <Router>
          <Switch>
            {/* <Route path='/home' component={Home} exact /> */}
            <Route path='/' component={WatchList} />
          </Switch>
        </Router>
    </div>
    </div >
  );
}

export default App;
