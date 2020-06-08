import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import styles from './App.module.scss';
// import { Building } from './Building';
import { Demon } from './Demon';
import { Ghost } from './Ghost';
import { GradientScroll } from './GradientScroll';
import { Person } from './Person';
// import { Street } from './Street';

interface AppState {
  Component: React.FunctionComponent | React.ComponentClass;
  key: string;
}

export function App() {
  const [{ Component, key }, updateState] = useState<AppState>(() => ({
    Component: Person,
    key: uuid()
  }));

  const generate = (Component: React.FunctionComponent) =>
    updateState({ Component, key: uuid() });

  return (
    <main className={styles.main}>
      <div className={styles.generatedText}>
        <GradientScroll>
          <Component key={key} />
        </GradientScroll>
      </div>

      <div className={styles.generateButtons}>
        <span className={styles.generateButtonsLabel}>Generate a...</span>

        <button
          type="button"
          className={styles.generateButton}
          onClick={() => generate(Person)}
        >
          Person
        </button>

        <button
          type="button"
          className={styles.generateButton}
          onClick={() => generate(Ghost)}
        >
          Ghost
        </button>

        <button
          type="button"
          className={styles.generateButton}
          onClick={() => generate(Demon)}
        >
          Demon
        </button>

        {/* <button
          type="button"
          className={styles.generateButton}
          onClick={() => generate(Street)}
        >
          Street
        </button>

        <button
          type="button"
          className={styles.generateButton}
          onClick={() => generate(Building)}
        >
          Building
        </button> */}
      </div>
    </main>
  );
}
