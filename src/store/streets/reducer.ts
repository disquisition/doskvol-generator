import uuid from 'uuid/v4';

import * as actions from './actions';
import { StreetsState, initialState } from './state';

export function reducer(
  state: StreetsState = initialState,
  action: actions.StreetsAction
): StreetsState {
  switch (action.type) {
    case actions.addStreet.type: {
      return {
        ...state,
        streets: [
          ...state.streets,
          {
            id: uuid(),
            description: action.payload
          }
        ]
      };
    }

    case actions.removeStreet.type: {
      return {
        ...state,
        streets: state.streets.filter(b => b.id !== action.payload)
      };
    }

    case actions.updateStreet.type: {
      const { id, description } = action.payload;

      return {
        ...state,
        streets: state.streets.map(b =>
          b.id === id ? { ...b, description } : b
        )
      };
    }

    default: {
      return state;
    }
  }
}
