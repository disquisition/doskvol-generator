import React from 'react';

import { generator } from '../services/generator';
import { Generator } from './Generator';

export function PersonGenerator() {
  return <Generator title="Person" generate={generator.generatePerson} />;
}
