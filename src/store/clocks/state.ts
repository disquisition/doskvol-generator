import uuid from 'uuid/v4';

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
  clocks: [
    {
      id: uuid(),
      name: 'Attention from the Spirit Wardens',
      segments: 4,
      ticks: 0
    }
  ]
};
