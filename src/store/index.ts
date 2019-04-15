import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { create } from 'redux-react-hook';

import { Action } from './actions';
import { reducer } from './reducer';
import { State } from './state';

export const store = createStore<State, Action, {}, {}>(
  reducer,
  devToolsEnhancer({})
);

export const { StoreContext, useDispatch, useMappedState } = create<
  State,
  Action,
  typeof store
>();
