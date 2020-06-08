import React, { Fragment } from 'react';

import { grammar } from './grammar';

export function generateStreet() {
  return <Fragment>{grammar.flatten('#street#')}</Fragment>;
}
