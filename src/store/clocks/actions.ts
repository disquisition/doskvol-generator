import { action, payload } from 'ts-action';

import { SegmentCount } from './state';

export const addClock = action(
  '[clocks] add clock',
  payload<{ name: string; segments: SegmentCount }>()
);

export const removeClock = action('[clocks] remove clock', payload<string>());

export const updateClockName = action(
  '[clocks] update clock name',
  payload<{
    id: string;
    name: string;
  }>()
);

export const updateClockTicks = action(
  '[clocks] update clock segments ticked',
  payload<{
    id: string;
    ticks: number;
  }>()
);

export type ClocksAction = ReturnType<
  | typeof addClock
  | typeof removeClock
  | typeof updateClockName
  | typeof updateClockTicks
>;
