export interface Street {
  id: string;
  description: string;
}

export interface StreetsState {
  streets: Street[];
}

export const initialState: StreetsState = {
  streets: []
};
