import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import { GoPlus } from 'react-icons/go';

import { useId } from '../hooks/use-id';
import { useDispatch } from '../store';
import { addClock } from '../store/clocks/actions';
import { SegmentCount } from '../store/clocks/state';
import styles from './AddClockCard.module.scss';
import { Button } from './Button';
import cardStyles from './Card.module.scss';
import * as Clock from './Clock';

function useAddClock() {
  const dispatch = useDispatch();

  return useCallback(
    (name: string, segments: SegmentCount) =>
      dispatch(addClock({ name, segments })),
    [dispatch]
  );
}

export interface AddClockCardProps {
  className?: string;
}

export function AddClockCard(props: AddClockCardProps) {
  const { className } = props;
  const addClock = useAddClock();
  const [name, setName] = useState('');
  const [segments, setSegments] = useState<SegmentCount>(4);

  const id = useId();
  const segmentsId = `segments-${id}`;
  const nameId = `name-${id}`;

  const onAddClick = useCallback(
    (name: string, segments: SegmentCount) => {
      addClock(name, segments);
      setName('');
      setSegments(4);
    },
    [addClock, setName, setSegments]
  );

  return (
    <div className={classNames(cardStyles.card, className)}>
      <div className={cardStyles.cardHeader}>
        <span className={cardStyles.cardHeaderText}>New Clock</span>

        <div className={cardStyles.cardHeaderButtons}>
          <Button
            label="Add"
            aria-label="Add"
            onClick={() => onAddClick(name, segments)}
          >
            <GoPlus className="icon" size="1em" aria-hidden="true" />
          </Button>
        </div>
      </div>

      <div className={styles.addClockContent}>
        <div className={styles.addClockGraphicWrapper}>
          <Clock.Graphic segments={segments} />
        </div>

        <div className={styles.addClockFields}>
          <div className={styles.addClockField}>
            <label htmlFor={nameId} className={styles.addClockFieldLabel}>
              Name
            </label>

            <input
              type="text"
              id={nameId}
              className={styles.addClockFieldInput}
              value={name}
              onChange={e => setName((e.target as HTMLInputElement).value)}
            />
          </div>

          <div className={styles.addClockField}>
            <label htmlFor={segmentsId} className={styles.addClockFieldLabel}>
              Segments
            </label>

            <select
              id={segmentsId}
              className={styles.addClockFieldInput}
              value={segments}
              onChange={e =>
                setSegments(+(e.target as HTMLSelectElement)
                  .value as SegmentCount)
              }
            >
              <option value={4}>4</option>
              <option value={6}>6</option>
              <option value={8}>8</option>
              <option value={12}>12</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
