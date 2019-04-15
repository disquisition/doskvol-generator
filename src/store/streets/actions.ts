import { action, payload } from 'ts-action';

export const addStreet = action('[streets] add street', payload<string>());

export const removeStreet = action(
  '[streets] remove street',
  payload<string>()
);

export const updateStreet = action(
  '[streets] update street',
  payload<{ id: string; description: string }>()
);

export type StreetsAction = ReturnType<
  typeof addStreet | typeof removeStreet | typeof updateStreet
>;
