import uuid from 'uuid/v4';

import { generator } from '../../services/generator';

export interface Person {
  id: string;
  description: string;
}

export interface PeopleState {
  people: Person[];
}

export const initialState: PeopleState = {
  people: [
    {
      id: uuid(),
      description: generator.generatePerson()
    }
  ]
};
