import React, { ButtonHTMLAttributes } from 'react';

import { Button } from './Button';

export function IconButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { children, title, ...rest } = props;

  return (
    <Button {...rest} aria-label={title}>
      <span title={title} aria-hidden="true">
        {children}
      </span>
    </Button>
  );
}
