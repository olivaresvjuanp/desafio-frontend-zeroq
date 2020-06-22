export interface BranchOffice {
  name: string;
  online: boolean;

  location: {
    region_id: number;
    region: string;
    office: string;
    district: string;
    country: string;
    city: string;
  };

  category: string;

  lines: {
    [line: string]: {
      waiting: number;
      wait?: number;
      elapsed: number;
      name: string;
    }
  };
}

export interface BranchOfficesState {
  loading: boolean;
  branchOffices: BranchOffice[];
}

export const SET_LOADING = 'SET_LOADING';
export const SET_BRANCH_OFFICES = 'SET_BRANCH_OFFICES';

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

interface SetBranchOfficesAction {
  type: typeof SET_BRANCH_OFFICES;
  payload: BranchOffice[];
}

export type BranchOfficesActionTypes = SetLoadingAction | SetBranchOfficesAction;
