import React from 'react';

import { generator } from '../services/generator';
import { Generator } from './Generator';

export function DemonGenerator() {
  return <Generator title="Demon" generate={generator.generateDemon} />;
}
