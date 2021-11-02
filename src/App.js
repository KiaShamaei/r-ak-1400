import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/Auth/AuthContext';

// import Home from './pages/home/Home';
import WatchList from './pages/marketWatch/WatchList';
import { Wrapper } from './wrapper';
//redux
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Layout from './shared/components/layout/Layout';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const App = (props) => {
  return (
    <AuthProvider
      value={{
        isLoggin: true,
      }}
    >
      <Provider store={store}>
        <Wrapper>
          <Router>
            <Switch>
              {/*routs & autRouts comes here */}
              {/* <Route path='/' component={WatchList} /> */}
              <Route path='/' component={Layout} />
            </Switch>
          </Router>
        </Wrapper>
      </Provider>
    </AuthProvider>
  );
};

export default App;
