import { actionTypeWatchActions } from '../actions/watchActions/actionTypes';
const initialState = {
  loading: false,
  watches: [],
  error: '',
};

export const watchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypeWatchActions.fetchWatchRequest:
      return {
        ...state,
        loading: true,
      };
    case actionTypeWatchActions.fetchWatchSucess:
      return {
        loading: false,
        watches: action.payload,
        err: '',
      };
    case actionTypeWatchActions.fetchWatchFaild:
      return {
        loading: false,
        watches: [],
        err: action.payload,
      };
    default:
      return state;
  }
};
