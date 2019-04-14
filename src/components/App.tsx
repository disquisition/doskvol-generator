import React from 'react';

import styles from './App.module.scss';
import { BuildingGenerator } from './BuildingGenerator';
import { DemonGenerator } from './DemonGenerator';
import { GhostGenerator } from './GhostGenerator';
import { PersonGenerator } from './PersonGenerator';
import { StreetGenerator } from './StreetGenerator';

export function App() {
  return (
    <main className={styles.main}>
      <StreetGenerator />
      <BuildingGenerator />
      <PersonGenerator />
      <GhostGenerator />
      <DemonGenerator />
    </main>
  );
}
