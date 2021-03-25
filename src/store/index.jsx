import { applyMiddleware, createStore } from 'redux';
import combineReducers from '../reducers';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const store = createStore(
  combineReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;