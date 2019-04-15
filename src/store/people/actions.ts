import { action, payload } from 'ts-action';

export const addPerson = action('[people] add person', payload<string>());

export const removePerson = action('[people] remove person', payload<string>());

export const updatePerson = action(
  '[people] update person',
  payload<{ id: string; description: string }>()
);

export type PeopleAction = ReturnType<
  typeof addPerson | typeof removePerson | typeof updatePerson
>;
