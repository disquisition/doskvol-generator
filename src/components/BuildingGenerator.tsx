import React from 'react';

import { generator } from '../services/generator';
import { Generator } from './Generator';

export function BuildingGenerator() {
  return <Generator title="Building" generate={generator.generateBuilding} />;
}
