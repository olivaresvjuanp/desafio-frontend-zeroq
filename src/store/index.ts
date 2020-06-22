import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { branchOfficesReducer } from './branch-offices/reducers';
import { searchReducer } from './search/reducers';

const rootReducer = combineReducers({
  branchOfficesReducer,
  searchReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
