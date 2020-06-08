import React, { Fragment } from 'react';

import { useFlattenedRule } from '../hooks/use-flattened-rule';

export function Building() {
  const building = useFlattenedRule('#building#');

  return <Fragment>{building}</Fragment>;
}
