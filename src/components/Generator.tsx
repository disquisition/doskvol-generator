import React, { useState } from 'react';
import TextareaAutosize from 'react-autosize-textarea';

import { useId } from '../hooks/use-id';
import styles from './Generator.module.scss';
import { InlineRefreshButton } from './InlineRefreshButton';

export interface GeneratorProps {
  title: string;
  generate: () => string;
}

export function Generator(props: GeneratorProps) {
  const id = useId();
  const [text, setText] = useState(props.generate());

  return (
    <div className={styles.generator}>
      <label htmlFor={id} className={styles.generatorHeader}>
        <div className={styles.generatorHeaderText}>{props.title}</div>

        <div className={styles.generatorHeaderButtons}>
          <InlineRefreshButton onClick={() => setText(props.generate())} />
        </div>
      </label>

      <TextareaAutosize
        className={styles.generatorContent}
        id={id}
        value={text}
        onChange={e => setText((e.target as HTMLTextAreaElement).value)}
      />
    </div>
  );
}
