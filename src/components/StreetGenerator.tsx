import React from 'react';

import { generator } from '../services/generator';
import { Generator } from './Generator';

export function StreetGenerator() {
  return <Generator title="Street" generate={generator.generateStreet} />;
}
