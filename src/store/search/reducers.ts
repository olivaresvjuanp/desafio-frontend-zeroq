import {
  SearchState,
  SET_FILTER,
  SearchActionTypes
} from './types';

const initialState: SearchState = {
  filter: ''
};

export function searchReducer(
  state = initialState,
  action: SearchActionTypes
): SearchState {
  switch (action.type) {
    case SET_FILTER: {
      return { filter: action.payload };
    }

    default:
      return state;
  }
}
