import classNames from 'classnames';
import React, { TextareaHTMLAttributes } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { GoSync, GoX } from 'react-icons/go';

import { useId } from '../hooks/use-id';
import { Button } from './Button';
import cardStyles from './Card.module.scss';
import styles from './TextAreaCard.module.scss';

export interface TextAreaCardProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  onDelete?: () => void;
  onReload?: () => void;
}

export function TextAreaCard(props: TextAreaCardProps) {
  const { onDelete, onReload, label, ...rest } = props;
  const id = useId();
  const hasButtons = !!(onReload && onDelete);

  return (
    <div className={cardStyles.card}>
      <label htmlFor={id} className={cardStyles.cardHeader}>
        <div className={cardStyles.cardHeaderText}>{label}</div>

        {hasButtons && (
          <div className={cardStyles.cardHeaderButtons}>
            {onReload && (
              <Button aria-label="Reload" onClick={() => onReload()}>
                <GoSync className="icon" size="1em" aria-hidden="true" />
              </Button>
            )}

            {onDelete && (
              <Button aria-label="Delete" onClick={() => onDelete()}>
                <GoX className="icon" size="1em" aria-hidden="true" />
              </Button>
            )}
          </div>
        )}
      </label>

      <TextareaAutosize
        {...rest}
        id={id}
        className={classNames(rest.className, styles.textAreaCardContent)}
        title={label}
      />
    </div>
  );
}
