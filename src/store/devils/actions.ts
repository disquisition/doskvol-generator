import { action, payload } from 'ts-action';

import { DevilType } from './state';

export const addDevil = action(
  '[devils] add devil',
  payload<{ type: DevilType; description: string }>()
);

export const removeDevil = action('[devils] remove devil', payload<string>());

export const updateDevil = action(
  '[devils] update devil',
  payload<{ id: string; description: string }>()
);

export type DevilsAction = ReturnType<
  typeof addDevil | typeof removeDevil | typeof updateDevil
>;
