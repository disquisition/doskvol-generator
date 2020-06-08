import React, { Fragment } from 'react';

import { grammar } from './grammar';

export function generateBuilding() {
  return <Fragment>{grammar.flatten('#building#')}</Fragment>;
}
