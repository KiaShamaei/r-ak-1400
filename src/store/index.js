import {combineReducers} from 'redux'
import { watchReducer } from './reducers/watchReducer';




const rootReducer = combineReducers({

    //reducer must be add here ... 
    watchs :watchReducer
})

export default rootReducer;