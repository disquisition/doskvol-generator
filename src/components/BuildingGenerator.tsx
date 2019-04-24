import React, { useCallback } from 'react';
import { GoPlus } from 'react-icons/go';

import { generator } from '../services/generator';
import { useDispatch, useMappedState } from '../store';
import {
  addBuilding,
  removeBuilding,
  updateBuilding
} from '../store/buildings/actions';
import { State } from '../store/state';
import styles from './BuildingGenerator.module.scss';
import { Button } from './Button';
import { TextAreaCard } from './TextAreaCard';

function useBuildings() {
  const mapState = useCallback((state: State) => state.buildings.buildings, []);

  return useMappedState(mapState);
}

function useAddBuilding() {
  const dispatch = useDispatch();

  return useCallback(
    () => dispatch(addBuilding(generator.generateBuilding())),
    [dispatch]
  );
}

function useUpdateBuilding() {
  const dispatch = useDispatch();

  return useCallback(
    (id: string, description: string) =>
      dispatch(updateBuilding({ id, description })),
    [dispatch]
  );
}

function useRemoveBuilding() {
  const dispatch = useDispatch();

  return useCallback((id: string) => dispatch(removeBuilding(id)), [dispatch]);
}

export function BuildingGenerator() {
  const buildings = useBuildings();
  const addBuilding = useAddBuilding();
  const updateBuilding = useUpdateBuilding();
  const removeBuilding = useRemoveBuilding();

  return (
    <div>
      <header className={styles.buildingsHeader}>
        <h2 className={styles.buildingsHeading}>Buildings</h2>

        <Button aria-label="New building" onClick={addBuilding}>
          <GoPlus className="icon" aria-hidden="true" />
        </Button>
      </header>

      {buildings.map(b => (
        <TextAreaCard
          key={b.id}
          label="Building"
          value={b.description}
          onChange={e =>
            updateBuilding(b.id, (e.target as HTMLTextAreaElement).value)
          }
          onReload={() => updateBuilding(b.id, generator.generateBuilding())}
          onDelete={() => removeBuilding(b.id)}
        />
      ))}
    </div>
  );
}
