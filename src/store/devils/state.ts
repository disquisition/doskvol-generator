import uuid from 'uuid/v4';

import { generator } from '../../services/generator';

export enum DevilType {
  Ghost,
  Demon,
  SummonedHorror
}

export interface Devil {
  id: string;
  type: DevilType;
  description: string;
}

export interface DevilsState {
  devils: Devil[];
}

export const initialState: DevilsState = {
  devils: [
    {
      id: uuid(),
      type: DevilType.Ghost,
      description: generator.generateGhost()
    },
    {
      id: uuid(),
      type: DevilType.Demon,
      description: generator.generateDemon()
    }
  ]
};
