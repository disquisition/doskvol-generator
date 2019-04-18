export interface Building {
  id: string;
  description: string;
}

export interface BuildingsState {
  buildings: Building[];
}

export const initialState: BuildingsState = {
  buildings: []
};
