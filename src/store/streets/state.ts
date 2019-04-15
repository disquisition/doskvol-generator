import uuid from 'uuid/v4';

import { generator } from '../../services/generator';

export interface Street {
  id: string;
  description: string;
}

export interface StreetsState {
  streets: Street[];
}

export const initialState: StreetsState = {
  streets: [
    {
      id: uuid(),
      description: generator.generateStreet()
    }
  ]
};
