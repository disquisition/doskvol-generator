import cx from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

import styles from './GradientScroll.module.scss';

export interface GradientScrollProps {
  children?: React.ReactNode;
  className?: string;
}

export function GradientScroll({
  children,
  className = ''
}: GradientScrollProps) {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const scrollableElement = useRef<HTMLDivElement>(null);
  const contentElement = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollableScrollHeight = scrollableElement.current?.scrollHeight ?? 0;
    const scrollableScrollTop = scrollableElement.current?.scrollTop ?? 0;
    const contentHeight = contentElement.current?.clientHeight ?? 0;

    setIsAtTop(scrollableScrollTop === 0);
    setIsAtBottom(
      scrollableScrollHeight === contentHeight + scrollableScrollTop
    );
  };

  useEffect(() => {
    window.addEventListener('resize', handleScroll);

    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  useEffect(() => {
    handleScroll();
  }, [children]);

  return (
    <div className={cx(styles.container, className)}>
      <div
        className={cx(styles.overlay, {
          [styles.top]: isAtTop,
          [styles.bottom]: isAtBottom
        })}
      ></div>
      <div
        className={styles.scrollable}
        onScroll={handleScroll}
        ref={scrollableElement}
      >
        <div className={styles.content} ref={contentElement}>
          {children}
        </div>
      </div>
    </div>
  );
}
