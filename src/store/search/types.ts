export interface SearchState {
  filter: string;
}

export const SET_FILTER = 'SET_FILTER';

interface SetFilterAction {
  type: typeof SET_FILTER;
  payload: string;
}

export type SearchActionTypes = SetFilterAction;
