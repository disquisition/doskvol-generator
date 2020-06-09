import cx from 'classnames';
import React, { useCallback, useLayoutEffect } from 'react';

import { useRandom } from '../hooks/use-random';
import styles from './Text.module.scss';

function createMarkup(htmlString: string) {
  return { __html: htmlString };
}

function useRotation(): [number, () => void] {
  const [rn1, updateRN1] = useRandom(0.25, 1);
  const [rn2, updateRN2] = useRandom();
  const update = useCallback(() => {
    updateRN1();
    updateRN2();
  }, [updateRN1, updateRN2]);

  const rotation = rn2 >= 0.5 ? rn1 : rn1 * -1;

  return [rotation, update];
}

export type TextEmphasis = 'primary' | 'secondary' | 'none';

export interface TextProps {
  className?: string;
  emphasis?: TextEmphasis;
  source: string;
}

export function Text({ className, emphasis = 'none', source }: TextProps) {
  const [rotation, updateRotation] = useRotation();

  useLayoutEffect(() => {
    updateRotation();
  }, [source, updateRotation]);

  if (emphasis === 'primary') {
    return (
      <span
        className={cx(styles.primaryEmphasis, className)}
        dangerouslySetInnerHTML={createMarkup(source)}
      ></span>
    );
  }

  if (emphasis === 'secondary') {
    return (
      <span
        className={cx(styles.secondaryEmphasis, className)}
        style={{ transform: `rotate(${rotation}deg)` }}
        dangerouslySetInnerHTML={createMarkup(source)}
      ></span>
    );
  }

  return (
    <span
      className={cx(className)}
      dangerouslySetInnerHTML={createMarkup(source)}
    ></span>
  );
}
