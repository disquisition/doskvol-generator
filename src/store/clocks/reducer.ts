import uuid from 'uuid/v4';

import * as actions from './actions';
import { ClocksState, initialState } from './state';

export function reducer(
  state: ClocksState = initialState,
  action: actions.ClocksAction
): ClocksState {
  switch (action.type) {
    case actions.addClock.type: {
      const { name, segments } = action.payload;

      return {
        ...state,
        clocks: [
          ...state.clocks,
          {
            id: uuid(),
            name,
            segments,
            ticks: 0
          }
        ]
      };
    }

    case actions.removeClock.type: {
      return {
        ...state,
        clocks: state.clocks.filter(b => b.id !== action.payload)
      };
    }

    case actions.updateClockName.type: {
      const { id, name } = action.payload;

      return {
        ...state,
        clocks: state.clocks.map(c => (c.id === id ? { ...c, name } : c))
      };
    }

    case actions.updateClockTicks.type: {
      const { id, ticks } = action.payload;

      return {
        ...state,
        clocks: state.clocks.map(c => (c.id === id ? { ...c, ticks } : c))
      };
    }

    default: {
      return state;
    }
  }
}
