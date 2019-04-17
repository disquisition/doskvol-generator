import classNames from 'classnames';
import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { GoX } from 'react-icons/go';

import { useId } from '../hooks/use-id';
import { SegmentCount } from '../store/clocks/state';
import { Button } from './Button';
import cardStyles from './Card.module.scss';
import * as Clock from './Clock';
import styles from './ClockCard.module.scss';

export interface ClockCardProps {
  className?: string;
  name: string;
  onDelete?: () => void;
  onNameChange: (name: string) => void;
  onTickChange: (ticks: number) => void;
  segments: SegmentCount;
  ticks: number;
}

export function ClockCard(props: ClockCardProps) {
  const {
    className,
    name,
    onDelete,
    onNameChange,
    onTickChange,
    segments,
    ticks
  } = props;
  const id = useId();

  return (
    <div className={classNames(cardStyles.card, className)}>
      <label htmlFor={id} className={cardStyles.cardHeader}>
        <span className={cardStyles.cardHeaderText}>Clock</span>

        {onDelete && (
          <div className={cardStyles.cardHeaderButtons}>
            <Button
              label="Delete"
              aria-label="Delete"
              onClick={() => onDelete()}
            >
              <GoX className="icon" size="1em" aria-hidden="true" />
            </Button>
          </div>
        )}
      </label>

      <div className={styles.clockContent}>
        <TextareaAutosize
          id={id}
          className={styles.clockName}
          title="Clock name"
          value={name}
          onChange={e => onNameChange((e.target as HTMLTextAreaElement).value)}
        />

        <div className={styles.clockGraphicWrapper}>
          <Clock.Input
            aria-label={`Clock for "${name}"`}
            segments={segments}
            ticks={ticks}
            onTickChange={onTickChange}
          />
        </div>
      </div>
    </div>
  );
}
