import {
  BranchOffice,
  SET_LOADING,
  SET_BRANCH_OFFICES
} from "./types";

export function setLoading(loading: boolean) {
  return {
    type: SET_LOADING,
    payload: loading
  };
}

export function setBranchOffices(branchOffices: BranchOffice[]) {
  return {
    type: SET_BRANCH_OFFICES,
    payload: branchOffices
  };
}
