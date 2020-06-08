import React, { Fragment } from 'react';

import { useFlattenedRule } from '../hooks/use-flattened-rule';

export function Street() {
  const street = useFlattenedRule('#street#');

  return <Fragment>{street}</Fragment>;
}
