import axios from 'axios';
import { actionTypeWatchActions } from './actionTypes';

export const fetchWatchRequest = () => {
  return {
    type: actionTypeWatchActions.fetchWatchRequest,
  };
};
export const fetchWatchFaild = (err) => {
  return {
    type: actionTypeWatchActions.fetchWatchFaild,
    payload: err,
  };
};

export const fetchWatchSucess = (res) => {
  return {
    type: actionTypeWatchActions.fetchWatchSucess,
    payload: res,
  };
};
export const fetchWatches = () => {
  return (dispatch) => {
    dispatch(fetchWatchRequest());
    axios
      .get('https://beta-api.rabin.ir/api/watchlist/system')
      .then((res) => {
        let watches = res.data;
        dispatch(fetchWatchSucess(watches));
      })
      .catch((err) => dispatch(fetchWatchFaild(err)));
  };
};
