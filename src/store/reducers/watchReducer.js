import { actionTypeWatchActions } from "../actions/watchActions/actionTypes";
const initialState = {
    loading :  false,
    watchs : [],
    error : ""
}

export const watchReducer = (state= initialState, action)=>{
    switch (action.type){
        case actionTypeWatchActions.fetchWatchRequest : return{
            ...state , loading : true
        }
        case actionTypeWatchActions.fetchWatchSucess : return{
            loading : false,
            watchs : action.payload,
            err : ""
        }
        case actionTypeWatchActions.fetchWatchFaild : return{
            loading : false , 
            watchs : [],
            err: action.payload
        }
        default :  return  state
    }

}