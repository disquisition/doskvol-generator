import React, { createContext, Fragment, useContext } from 'react';

import { useExpandedRule } from '../hooks/use-expanded-rule';
import { useFlattenedRule } from '../hooks/use-flattened-rule';
import { useRandom } from '../hooks/use-random-number';
import { DevilPronounsRule } from '../services/grammar';
import styles from './Demon.module.scss';
import { Text } from './Text';

const PronounsContext = createContext(DevilPronounsRule.DevilNeutral);

interface DemonContextProps {
  children: React.ReactNode;
}

function DemonContext({ children }: DemonContextProps) {
  const pronounsRule = useExpandedRule<DevilPronounsRule>('#devil-pronouns#');

  return (
    <div className={styles.demon} data-testid="generated-demon">
      <PronounsContext.Provider value={pronounsRule}>
        {children}
      </PronounsContext.Provider>
    </div>
  );
}

function DemonLook() {
  const pronounsRule = useContext(PronounsContext);

  const name = useFlattenedRule(`#[${pronounsRule}]demon-name#`);
  const appears = useFlattenedRule(`#[${pronounsRule}]demon-appears#`);
  const aspect = useFlattenedRule(`#[${pronounsRule}]demon-aspect.a#`);
  const aspectIncludesWith = aspect.includes(' with ');

  const feature1Rule = useExpandedRule(
    `#[${pronounsRule}]demon-feature-physical-1#`
  );
  const feature1Prefix = useFlattenedRule(
    `#[${pronounsRule}][${feature1Rule}]feature-prefix#`
  );
  const feature1Highlight = useFlattenedRule(
    `#[${pronounsRule}][${feature1Rule}]feature-highlight#`
  );
  const feature1Postfix = useFlattenedRule(
    `#[${pronounsRule}][${feature1Rule}]feature-postfix#`
  );

  const feature2Rule = useExpandedRule(
    `#[${pronounsRule}]demon-feature-physical-2#`
  );
  const feature2Prefix = useFlattenedRule(
    `#[${pronounsRule}][${feature2Rule}]feature-prefix#`
  );
  const feature2Highlight = useFlattenedRule(
    `#[${pronounsRule}][${feature2Rule}]feature-highlight#`
  );
  const feature2Postfix = useFlattenedRule(
    `#[${pronounsRule}][${feature2Rule}]feature-postfix#`
  );

  const [featureRandom] = useRandom();
  const featurePrefix = featureRandom >= 0.5 ? feature1Prefix : feature2Prefix;
  const featureHighlight =
    featureRandom >= 0.5 ? feature1Highlight : feature2Highlight;
  const featurePostfix =
    featureRandom >= 0.5 ? feature1Postfix : feature2Postfix;

  const aura = useFlattenedRule(`#[${pronounsRule}]demon-feature-aura#`);

  const [random] = useRandom();

  if (random >= 0.5) {
    return (
      <Fragment>
        The demon <Text className={styles.demonName} source={name} />{' '}
        <Text source={appears} />—<Text source={aspect} emphasis="primary" />{' '}
        {aspectIncludesWith ? 'who has' : 'with'}{' '}
        <Text source={feature1Prefix} />{' '}
        <Text source={feature1Highlight} emphasis="secondary" />{' '}
        <Text source={feature1Postfix} /> and <Text source={feature2Prefix} />{' '}
        <Text source={feature2Highlight} emphasis="secondary" />
        {feature2Postfix ? (
          <Fragment>
            {' '}
            <Text source={feature2Postfix} />.
          </Fragment>
        ) : (
          '.'
        )}
      </Fragment>
    );
  }

  return (
    <Fragment>
      The demon <Text className={styles.demonName} source={name} />{' '}
      <Text source={appears} />—<Text source={aspect} emphasis="primary" />{' '}
      {aspectIncludesWith ? 'and' : 'with'} <Text source={featurePrefix} />{' '}
      <Text source={featureHighlight} emphasis="secondary" />
      {featurePostfix ? (
        <Fragment>
          {' '}
          <Text source={featurePostfix} />,
        </Fragment>
      ) : (
        ','
      )}{' '}
      whose presence causes{' '}
      <span className="nowrap">
        <Text source={aura} emphasis="secondary" />.
      </span>
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
      <span className="nowrap">
        <Text source={desire} emphasis="secondary" />.
      </span>
    </Fragment>
  );
}

export function Demon() {
  return (
    <DemonContext>
      <DemonLook /> <DemonAffinity />
    </DemonContext>
  );
}
