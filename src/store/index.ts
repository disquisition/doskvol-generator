import { StoreEnhancer, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from 'redux-localstorage';
import { create } from 'redux-react-hook';

import { Action } from './actions';
import { reducer } from './reducer';
import { State } from './state';

export const store = createStore<State, Action, {}, {}>(
  reducer,
  composeWithDevTools(persistState() as StoreEnhancer)
);

export const { StoreContext, useDispatch, useMappedState } = create<
  State,
  Action,
  typeof store
>();
