import uuid from 'uuid/v4';

import * as actions from './actions';
import { BuildingsState, initialState } from './state';

export function reducer(
  state: BuildingsState = initialState,
  action: actions.BuildingsAction
): BuildingsState {
  switch (action.type) {
    case actions.addBuilding.type: {
      return {
        ...state,
        buildings: [
          ...state.buildings,
          {
            id: uuid(),
            description: action.payload
          }
        ]
      };
    }

    case actions.removeBuilding.type: {
      return {
        ...state,
        buildings: state.buildings.filter(b => b.id !== action.payload)
      };
    }

    case actions.updateBuilding.type: {
      const { id, description } = action.payload;

      return {
        ...state,
        buildings: state.buildings.map(b =>
          b.id === id ? { ...b, description } : b
        )
      };
    }

    default: {
      return state;
    }
  }
}
