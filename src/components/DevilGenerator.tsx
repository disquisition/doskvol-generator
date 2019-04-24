import React, { useCallback } from 'react';
import { GoPlus } from 'react-icons/go';

import { generator } from '../services/generator';
import { useDispatch, useMappedState } from '../store';
import { addDevil, removeDevil, updateDevil } from '../store/devils/actions';
import { DevilType } from '../store/devils/state';
import { State } from '../store/state';
import { Button } from './Button';
import styles from './DevilGenerator.module.scss';
import { TextAreaCard } from './TextAreaCard';

function useDevils() {
  const mapState = useCallback((state: State) => state.devils.devils, []);

  return useMappedState(mapState);
}

function useAddDemon() {
  const dispatch = useDispatch();

  return useCallback(
    () =>
      dispatch(
        addDevil({
          type: DevilType.Demon,
          description: generator.generateDemon()
        })
      ),
    [dispatch]
  );
}

function useAddGhost() {
  const dispatch = useDispatch();

  return useCallback(
    () =>
      dispatch(
        addDevil({
          type: DevilType.Ghost,
          description: generator.generateGhost()
        })
      ),
    [dispatch]
  );
}

function useUpdateDevil() {
  const dispatch = useDispatch();

  return useCallback(
    (id: string, description: string) =>
      dispatch(updateDevil({ id, description })),
    [dispatch]
  );
}

function generateDevilByType(type: DevilType) {
  switch (type) {
    case DevilType.Demon:
      return generator.generateDemon();

    case DevilType.Ghost:
      return generator.generateGhost();

    case DevilType.SummonedHorror:
      return '';

    default:
      return '';
  }
}

function getDevilTypeDescription(type: DevilType) {
  switch (type) {
    case DevilType.Demon:
      return 'Demon';

    case DevilType.Ghost:
      return 'Ghost';

    case DevilType.SummonedHorror:
      return 'Summoned Horror';

    default:
      return 'Unknown';
  }
}

function useRemoveDevil() {
  const dispatch = useDispatch();

  return useCallback((id: string) => dispatch(removeDevil(id)), [dispatch]);
}

export function DevilGenerator() {
  const devils = useDevils();
  const addDemon = useAddDemon();
  const addGhost = useAddGhost();
  const updateDevil = useUpdateDevil();
  const removeDevil = useRemoveDevil();

  return (
    <div>
      <header className={styles.devilsHeader}>
        <h2 className={styles.devilsHeading}>Devils</h2>

        <Button aria-label="New demon" onClick={addDemon}>
          <GoPlus className="icon" aria-hidden="true" />{' '}
          <span className={styles.devilsHeaderButtonText}>Demon</span>
        </Button>

        <Button aria-label="New ghost" onClick={addGhost}>
          <GoPlus className="icon" aria-hidden="true" />{' '}
          <span className={styles.devilsHeaderButtonText}>Ghost</span>
        </Button>
      </header>

      {devils.map(d => (
        <TextAreaCard
          key={d.id}
          label={getDevilTypeDescription(d.type)}
          value={d.description}
          onChange={e =>
            updateDevil(d.id, (e.target as HTMLTextAreaElement).value)
          }
          onReload={() => updateDevil(d.id, generateDevilByType(d.type))}
          onDelete={() => removeDevil(d.id)}
        />
      ))}
    </div>
  );
}
