import React, { useState } from 'react';

import * as generator from '../services/generator';
import styles from './App.module.scss';
import { GradientScroll } from './GradientScroll';

export function App() {
  const [generatedContent, updateGeneratedContent] = useState(() =>
    generator.generatePerson()
  );

  return (
    <main className={styles.main}>
      <div className={styles.generatedText}>
        <GradientScroll>{generatedContent}</GradientScroll>
      </div>

      <div className={styles.generateButtons}>
        <span className={styles.generateButtonsLabel}>Generate a...</span>

        <button
          type="button"
          className={styles.generateButton}
          onClick={() => updateGeneratedContent(generator.generatePerson())}
        >
          Person
        </button>

        <button
          type="button"
          className={styles.generateButton}
          onClick={() => updateGeneratedContent(generator.generateGhost())}
        >
          Ghost
        </button>

        <button
          type="button"
          className={styles.generateButton}
          onClick={() => updateGeneratedContent(generator.generateDemon())}
        >
          Demon
        </button>

        {/* <button
          type="button"
          className={styles.generateButton}
          onClick={() => updateGeneratedContent(generator.generateStreet())}
        >
          Street
        </button>

        <button
          type="button"
          className={styles.generateButton}
          onClick={() => updateGeneratedContent(generator.generateBuilding())}
        >
          Building
        </button> */}
      </div>
    </main>
  );
}
