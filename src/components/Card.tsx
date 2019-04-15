import classNames from 'classnames';
import React, { TextareaHTMLAttributes } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { GoSync, GoX } from 'react-icons/go';

import { useId } from '../hooks/use-id';
import styles from './Card.module.scss';
import { IconButton } from './IconButton';

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
          <IconButton title="Reload" onClick={() => onReload && onReload()}>
            <GoSync size="1em" />
          </IconButton>

          <IconButton title="Delete" onClick={() => onDelete && onDelete()}>
            <GoX size="1em" />
          </IconButton>
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
