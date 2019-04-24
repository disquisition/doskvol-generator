import React, { useCallback } from 'react';
import { GoPlus } from 'react-icons/go';

import { generator } from '../services/generator';
import { useDispatch, useMappedState } from '../store';
import { State } from '../store/state';
import {
  addStreet,
  removeStreet,
  updateStreet
} from '../store/streets/actions';
import { Button } from './Button';
import styles from './StreetGenerator.module.scss';
import { TextAreaCard } from './TextAreaCard';

function useStreets() {
  const mapState = useCallback((state: State) => state.streets.streets, []);

  return useMappedState(mapState);
}

function useAddStreet() {
  const dispatch = useDispatch();

  return useCallback(() => dispatch(addStreet(generator.generateStreet())), [
    dispatch
  ]);
}

function useUpdateStreet() {
  const dispatch = useDispatch();

  return useCallback(
    (id: string, description: string) =>
      dispatch(updateStreet({ id, description })),
    [dispatch]
  );
}

function useRemoveStreet() {
  const dispatch = useDispatch();

  return useCallback((id: string) => dispatch(removeStreet(id)), [dispatch]);
}

export function StreetGenerator() {
  const streets = useStreets();
  const addStreet = useAddStreet();
  const updateStreet = useUpdateStreet();
  const removeStreet = useRemoveStreet();

  return (
    <div>
      <header className={styles.streetsHeader}>
        <h2 className={styles.streetsHeading}>Streets</h2>

        <Button aria-label="New street" onClick={addStreet}>
          <GoPlus className="icon" aria-hidden="true" />
        </Button>
      </header>

      {streets.map(s => (
        <TextAreaCard
          key={s.id}
          label="Street"
          value={s.description}
          onChange={e =>
            updateStreet(s.id, (e.target as HTMLTextAreaElement).value)
          }
          onReload={() => updateStreet(s.id, generator.generateStreet())}
          onDelete={() => removeStreet(s.id)}
        />
      ))}
    </div>
  );
}
