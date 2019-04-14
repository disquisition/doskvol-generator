import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

import styles from './InlineButton.module.scss';

export function InlineButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      {...props}
      className={classNames(styles.inlineButton, props.className)}
    />
  );
}
