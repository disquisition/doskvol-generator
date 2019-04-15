import classNames from 'classnames';
import React, { TextareaHTMLAttributes } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { GoSync, GoX } from 'react-icons/go';

import { useId } from '../hooks/use-id';
import { Button } from './Button';
import styles from './Card.module.scss';

export interface CardProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string;
  onDelete?: () => void;
  onReload?: () => void;
}

export function Card(props: CardProps) {
  const { onDelete, onReload, title, ...rest } = props;
  const id = useId();

  return (
    <div className={styles.card}>
      <label htmlFor={id} className={styles.cardHeader}>
        <div className={styles.cardHeaderText}>{title}</div>

        <div className={styles.cardHeaderButtons}>
          <Button
            title="Reload"
            aria-label="Reload"
            onClick={() => onReload && onReload()}
          >
            <GoSync className="icon" size="1em" aria-hidden="true" />
          </Button>

          <Button
            title="Delete"
            aria-label="Delete"
            onClick={() => onDelete && onDelete()}
          >
            <GoX className="icon" size="1em" aria-hidden="true" />
          </Button>
        </div>
      </label>

      <TextareaAutosize
        {...rest}
        id={id}
        className={classNames(rest.className, styles.cardContent)}
      />
    </div>
  );
}
