import { combineReducers } from 'redux';
import { watchReducer } from './reducers/watchReducer';

const rootReducer = combineReducers({
  //reducer must be add here ...
  watches: watchReducer,
});

export default rootReducer;
