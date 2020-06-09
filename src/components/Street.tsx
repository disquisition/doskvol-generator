import React from 'react';

import { useFlattenedRule } from '../hooks/use-flattened-rule';
import styles from './Street.module.scss';

export function Street() {
  const street = useFlattenedRule('#street#');

  return (
    <div className={styles.street} data-testid="generated-street">
      {street}
    </div>
  );
}
