export interface Person {
  id: string;
  description: string;
}

export interface PeopleState {
  people: Person[];
}

export const initialState: PeopleState = {
  people: []
};
