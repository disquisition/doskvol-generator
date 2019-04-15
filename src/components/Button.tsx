import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.scss';

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      {...props}
      className={classNames(props.className, styles.inlineButton)}
    />
  );
}
