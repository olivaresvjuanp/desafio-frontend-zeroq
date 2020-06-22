import { Action } from 'redux';

import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';

import axios from 'axios';
import { AppState } from './store';

import {
  setLoading,
  setBranchOffices
} from './store/branch-offices/actions';

export const thunkGetOffices = (): ThunkAction<void, AppState, null, Action> => {
  return (dispatch: ThunkDispatch<AppState, null, Action>, getState: () => AppState): void => {
    dispatch(setLoading(true));

    axios.get('https://boiling-mountain-49639.herokuapp.com/desafio-frontend')
      .then((response): void => {
        console.debug(response);

        if (response.status === 200) {
          dispatch(setBranchOffices(response.data));
        } else {
          // ...
        }
      })
      .catch((error): void => {
        console.error('Error:', error);
        // ...
      })
      .finally((): void => {
        dispatch(setLoading(false));
      });
  };
};
