import React, { Fragment } from 'react';

import { Text } from '../components/Text';
import styles from './demon-generator.module.scss';
import { DevilPronounsRule, generateRule, grammar } from './grammar';

function generateDemonLook(pronounsRule: DevilPronounsRule) {
  const name = grammar.flatten(`#[${pronounsRule}]demon-name#`);
  const appears = grammar.flatten(`#[${pronounsRule}]demon-appears#`);
  const aspect = grammar.flatten(`#[${pronounsRule}]demon-aspect.a#`);
  const aspectIncludesWith = aspect.includes(' with ');

  if (Math.random() >= 0.5) {
    const feature1 = grammar.flatten(
      `#[${pronounsRule}]demon-feature-physical-1#`
    );
    const feature2 = grammar.flatten(
      `#[${pronounsRule}]demon-feature-physical-2#`
    );

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

  const feature = grammar.flatten(`#[${pronounsRule}]demon-feature-physical#`);
  const aura = grammar.flatten(`#[${pronounsRule}]demon-feature-aura#`);

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

function generateDemonAffinity(pronounsRule: DevilPronounsRule) {
  const their = grammar.flatten(`#[${pronounsRule}]their.capitalize#`);
  const affinity = grammar.flatten(`#[${pronounsRule}]demon-affinity#`);
  const they = grammar.flatten(`#[${pronounsRule}]they#`);
  const have = grammar.flatten(`#[${pronounsRule}]have#`);
  const desire = grammar.flatten(`#[${pronounsRule}]demon-desire#`);

  return (
    <Fragment>
      <Text source={their} /> affinity is for{' '}
      <Text source={affinity} emphasis="primary" /> and <Text source={they} />{' '}
      <Text source={have} /> a demonic desire for{' '}
      <Text source={desire} emphasis="secondary" />.
    </Fragment>
  );
}

export function generateDemon() {
  const pronounsRule = generateRule<DevilPronounsRule>('#devil-pronouns#');

  const look = generateDemonLook(pronounsRule);
  const affinity = generateDemonAffinity(pronounsRule);

  return (
    <Fragment>
      {look} {affinity}
    </Fragment>
  );
}
