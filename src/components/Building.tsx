import React from 'react';

import { useFlattenedRule } from '../hooks/use-flattened-rule';
import styles from './Building.module.scss';

export function Building() {
  const building = useFlattenedRule('#building#');

  return (
    <div className={styles.building} data-testid="generated-building">
      {building}
    </div>
  );
}
