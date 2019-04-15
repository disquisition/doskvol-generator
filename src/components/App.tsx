import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import styles from './App.module.scss';
import { BuildingGenerator } from './BuildingGenerator';
import { DevilGenerator } from './DevilGenerator';
import { PeopleGenerator } from './PeopleGenerator';
import { StreetGenerator } from './StreetGenerator';

interface TabDescription {
  title: string;
  component: React.ComponentType;
}

const tabs: TabDescription[] = [
  { title: 'Streets', component: StreetGenerator },
  { title: 'Buildings', component: BuildingGenerator },
  { title: 'People', component: PeopleGenerator },
  { title: 'Devils', component: DevilGenerator }
];

export function App() {
  return (
    <main className={styles.main}>
      <Tabs>
        <TabList>
          {tabs.map(t => (
            <Tab key={t.title}>{t.title}</Tab>
          ))}
        </TabList>

        {tabs.map(t => (
          <TabPanel key={t.title}>
            <t.component />
          </TabPanel>
        ))}
      </Tabs>
    </main>
  );
}
