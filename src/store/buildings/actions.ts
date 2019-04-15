import { action, payload } from 'ts-action';

export const addBuilding = action(
  '[buildings] add building',
  payload<string>()
);

export const removeBuilding = action(
  '[buildings] remove building',
  payload<string>()
);

export const updateBuilding = action(
  '[buildings] update building',
  payload<{ id: string; description: string }>()
);

export type BuildingsAction = ReturnType<
  typeof addBuilding | typeof removeBuilding | typeof updateBuilding
>;
