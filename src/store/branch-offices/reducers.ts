import {
  BranchOfficesState,
  SET_LOADING,
  SET_BRANCH_OFFICES,
  BranchOfficesActionTypes
} from './types';

const initialState: BranchOfficesState = {
  loading: false,
  branchOffices: []
};

export function branchOfficesReducer(
  state = initialState,
  action: BranchOfficesActionTypes
): BranchOfficesState {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload
      };
    }

    case SET_BRANCH_OFFICES: {
      return {
        ...state,
        branchOffices: [...state.branchOffices, ...action.payload]
      };
    }

    default:
      return state;
  }
}
