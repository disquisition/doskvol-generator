import uuid from 'uuid/v4';

import * as actions from './actions';
import { DevilsState, initialState } from './state';

export function reducer(
  state: DevilsState = initialState,
  action: actions.DevilsAction
): DevilsState {
  switch (action.type) {
    case actions.addDevil.type: {
      const { type, description } = action.payload;

      return {
        ...state,
        devils: [
          ...state.devils,
          {
            id: uuid(),
            type,
            description
          }
        ]
      };
    }

    case actions.removeDevil.type: {
      return {
        ...state,
        devils: state.devils.filter(b => b.id !== action.payload)
      };
    }

    case actions.updateDevil.type: {
      const { id, description } = action.payload;

      return {
        ...state,
        devils: state.devils.map(b => (b.id === id ? { ...b, description } : b))
      };
    }

    default: {
      return state;
    }
  }
}
