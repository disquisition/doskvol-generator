import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { BuildingGenerator } from './BuildingGenerator';
import { DevilGenerator } from './DevilGenerator';
import { PeopleGenerator } from './PeopleGenerator';
import { StreetGenerator } from './StreetGenerator';

interface GeneratorTab {
  title: string;
  component: React.ComponentType;
}

const tabs: GeneratorTab[] = [
  { title: 'Streets', component: StreetGenerator },
  { title: 'Buildings', component: BuildingGenerator },
  { title: 'People', component: PeopleGenerator },
  { title: 'Devils', component: DevilGenerator }
];

function getTabIndexByName(name?: string) {
  return tabs.findIndex(t => t.title.toLowerCase() === name);
}

function getTabNameByIndex(index: number) {
  return tabs[index].title.toLowerCase();
}

export interface GeneratorParams {
  generatorName?: string;
}

export type GeneratorProps = RouteComponentProps<GeneratorParams>;

export function Generator({ history, match }: GeneratorProps) {
  useEffect(() => {
    if (getTabIndexByName(match.params.generatorName) === -1) {
      history.replace(getTabNameByIndex(0));
    }
  }, [match.params.generatorName]);

  return (
    <Tabs
      selectedIndex={getTabIndexByName(match.params.generatorName)}
      onSelect={index => history.push(getTabNameByIndex(index))}
    >
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
  );
}
