import React from 'react';

import { generator } from '../services/generator';
import { Generator } from './Generator';

export function GhostGenerator() {
  return <Generator title="Ghost" generate={generator.generateGhost} />;
}
