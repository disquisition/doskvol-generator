import React, { useCallback } from 'react';

import { useDispatch, useMappedState } from '../store';
import {
  removeClock,
  updateClockName,
  updateClockTicks
} from '../store/clocks/actions';
import { State } from '../store/state';
import { AddClockCard } from './AddClockCard';
import { ClockCard } from './ClockCard';
import styles from './Clocks.module.scss';

function useClocks() {
  const mapState = useCallback((state: State) => state.clocks.clocks, []);

  return useMappedState(mapState);
}

function useUpdateClockName() {
  const dispatch = useDispatch();

  return useCallback(
    (id: string, name: string) => dispatch(updateClockName({ id, name })),
    [dispatch]
  );
}

function useUpdateClockTicks() {
  const dispatch = useDispatch();

  return useCallback(
    (id: string, ticks: number) => dispatch(updateClockTicks({ id, ticks })),
    [dispatch]
  );
}

function useRemoveClock() {
  const dispatch = useDispatch();

  return useCallback((id: string) => dispatch(removeClock(id)), [dispatch]);
}

export function Clocks() {
  const clocks = useClocks();
  const removeClock = useRemoveClock();
  const updateClockName = useUpdateClockName();
  const updateClockTicks = useUpdateClockTicks();

  return (
    <div>
      <h2 className={styles.clocksHeading}>Clocks</h2>

      {clocks.map(c => (
        <ClockCard
          key={c.id}
          name={c.name}
          segments={c.segments}
          ticks={c.ticks}
          onDelete={() => removeClock(c.id)}
          onNameChange={name => updateClockName(c.id, name)}
          onTickChange={ticks => updateClockTicks(c.id, ticks)}
        />
      ))}

      <AddClockCard />
    </div>
  );
}
