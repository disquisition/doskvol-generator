import React, { createContext, Fragment, useContext } from 'react';

import { useExpandedRule } from '../hooks/use-expanded-rule';
import { useFlattenedRule } from '../hooks/use-flattened-rule';
import { useRandom } from '../hooks/use-random-number';
import { DevilPronounsRule } from '../services/grammar';
import styles from './Demon.module.scss';
import { Text } from './Text';

const PronounsContext = createContext(DevilPronounsRule.DevilNeutral);

function DemonLook() {
  const pronounsRule = useContext(PronounsContext);

  const name = useFlattenedRule(`#[${pronounsRule}]demon-name#`);
  const appears = useFlattenedRule(`#[${pronounsRule}]demon-appears#`);
  const aspect = useFlattenedRule(`#[${pronounsRule}]demon-aspect.a#`);
  const aspectIncludesWith = aspect.includes(' with ');
  const feature1 = useFlattenedRule(
    `#[${pronounsRule}]demon-feature-physical-1#`
  );
  const feature2 = useFlattenedRule(
    `#[${pronounsRule}]demon-feature-physical-2#`
  );
  const feature = useFlattenedRule(`#[${pronounsRule}]demon-feature-physical#`);
  const aura = useFlattenedRule(`#[${pronounsRule}]demon-feature-aura#`);

  const [random] = useRandom();

  if (random >= 0.5) {
    return (
      <Fragment>
        The demon <Text className={styles.demonName} source={name} />{' '}
        <Text source={appears} />—<Text source={aspect} emphasis="primary" />{' '}
        {aspectIncludesWith ? 'who has' : 'with'}{' '}
        <Text source={feature1} emphasis="secondary" /> and{' '}
        <Text source={feature2} emphasis="secondary" />.
      </Fragment>
    );
  }

  return (
    <Fragment>
      The demon <Text className={styles.demonName} source={name} />{' '}
      <Text source={appears} />—<Text source={aspect} emphasis="primary" />{' '}
      {aspectIncludesWith ? 'and' : 'with'}{' '}
      <Text source={feature} emphasis="secondary" />, whose presence causes{' '}
      <Text source={aura} emphasis="secondary" />.
    </Fragment>
  );
}

function DemonAffinity() {
  const pronounsRule = useContext(PronounsContext);

  const their = useFlattenedRule(`#[${pronounsRule}]their.capitalize#`);
  const affinity = useFlattenedRule(`#[${pronounsRule}]demon-affinity#`);
  const they = useFlattenedRule(`#[${pronounsRule}]they#`);
  const have = useFlattenedRule(`#[${pronounsRule}]have#`);
  const desire = useFlattenedRule(`#[${pronounsRule}]demon-desire#`);

  return (
    <Fragment>
      <Text source={their} /> affinity is for{' '}
      <Text source={affinity} emphasis="primary" /> and <Text source={they} />{' '}
      <Text source={have} /> a demonic desire for{' '}
      <Text source={desire} emphasis="secondary" />.
    </Fragment>
  );
}

export function Demon() {
  const pronounsRule = useExpandedRule<DevilPronounsRule>('#devil-pronouns#');

  return (
    <Fragment>
      <PronounsContext.Provider value={pronounsRule}>
        <DemonLook /> <DemonAffinity />
      </PronounsContext.Provider>
    </Fragment>
  );
}
