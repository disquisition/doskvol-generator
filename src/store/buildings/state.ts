import uuid from 'uuid/v4';

import { generator } from '../../services/generator';

export interface Building {
  id: string;
  description: string;
}

export interface BuildingsState {
  buildings: Building[];
}

export const initialState: BuildingsState = {
  buildings: [
    {
      id: uuid(),
      description: generator.generateBuilding()
    }
  ]
};
