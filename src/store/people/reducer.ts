import uuid from 'uuid/v4';

import * as actions from './actions';
import { PeopleState, initialState } from './state';

export function reducer(
  state: PeopleState = initialState,
  action: actions.PeopleAction
): PeopleState {
  switch (action.type) {
    case actions.addPerson.type: {
      return {
        ...state,
        people: [
          ...state.people,
          {
            id: uuid(),
            description: action.payload
          }
        ]
      };
    }

    case actions.removePerson.type: {
      return {
        ...state,
        people: state.people.filter(b => b.id !== action.payload)
      };
    }

    case actions.updatePerson.type: {
      const { id, description } = action.payload;

      return {
        ...state,
        people: state.people.map(b => (b.id === id ? { ...b, description } : b))
      };
    }

    default: {
      return state;
    }
  }
}
