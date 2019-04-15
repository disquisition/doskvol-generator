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
  devils: []
};
