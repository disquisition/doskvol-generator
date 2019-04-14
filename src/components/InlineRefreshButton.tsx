import React, { ButtonHTMLAttributes } from 'react';

import { InlineButton } from './InlineButton';

export function InlineRefreshButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <InlineButton {...props} aria-label="Refresh">
      <span title="Refresh" aria-hidden="true">
        ⟳
      </span>
    </InlineButton>
  );
}
