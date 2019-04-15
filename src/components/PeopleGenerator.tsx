import React, { useCallback } from 'react';
import { GoPlus } from 'react-icons/go';

import { generator } from '../services/generator';
import { useDispatch, useMappedState } from '../store';
import { addPerson, removePerson, updatePerson } from '../store/people/actions';
import { State } from '../store/state';
import { Card } from './Card';
import { IconButton } from './IconButton';
import styles from './PeopleGenerator.module.scss';

function usePeople() {
  const mapState = useCallback((state: State) => state.people.people, []);

  return useMappedState(mapState);
}

function useAddPerson() {
  const dispatch = useDispatch();

  return useCallback(() => dispatch(addPerson(generator.generatePerson())), []);
}

function useUpdatePerson() {
  const dispatch = useDispatch();

  return useCallback(
    (id: string, description: string) =>
      dispatch(updatePerson({ id, description })),
    []
  );
}

function useRemovePerson() {
  const dispatch = useDispatch();

  return useCallback((id: string) => dispatch(removePerson(id)), []);
}

export function PeopleGenerator() {
  const people = usePeople();
  const addPerson = useAddPerson();
  const updatePerson = useUpdatePerson();
  const removePerson = useRemovePerson();

  return (
    <div>
      <header className={styles.peopleHeader}>
        <h2 className={styles.peopleHeading}>People</h2>

        <IconButton title="New person" onClick={addPerson}>
          <GoPlus />
        </IconButton>
      </header>

      {people.map(p => (
        <Card
          key={p.id}
          title="Person"
          value={p.description}
          onChange={e =>
            updatePerson(p.id, (e.target as HTMLTextAreaElement).value)
          }
          onReload={() => updatePerson(p.id, generator.generatePerson())}
          onDelete={() => removePerson(p.id)}
        />
      ))}
    </div>
  );
}
