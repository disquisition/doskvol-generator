export type SegmentCount = 4 | 6 | 8 | 12;

export interface Clock {
  id: string;
  name: string;
  segments: SegmentCount;
  ticks: number;
}

export interface ClocksState {
  clocks: Clock[];
}

export const initialState: ClocksState = {
  clocks: []
};
