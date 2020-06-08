import cx from 'classnames';
import React, { useEffect, useState } from 'react';

import styles from './Text.module.scss';

function getRandomNumberBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function getRandomRotation() {
  const rn1 = getRandomNumberBetween(0.25, 1);
  const rn2 = Math.random();

  return rn2 >= 0.5 ? rn1 : rn1 * -1;
}

function createMarkup(htmlString: string) {
  return { __html: htmlString };
}

export type TextEmphasis = 'primary' | 'secondary' | 'none';

export interface TextProps {
  className?: string;
  emphasis?: TextEmphasis;
  source: string;
}

export function Text({ className, emphasis = 'none', source }: TextProps) {
  const [rotation, setRotation] = useState(() => getRandomRotation());

  useEffect(() => {
    setRotation(getRandomRotation());
  }, [source]);

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
