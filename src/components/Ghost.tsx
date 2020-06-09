import React, { createContext, Fragment, useContext } from 'react';

import { startsWithVowel } from '../helpers/starts-with-vowel';
import { useExpandedRule } from '../hooks/use-expanded-rule';
import { useFlattenedRule } from '../hooks/use-flattened-rule';
import { DevilPronounsRule, generateRule } from '../services/grammar';
import styles from './Ghost.module.scss';
import { Text } from './Text';

const PronounsContext = createContext(DevilPronounsRule.DevilNeutral);

interface GhostContextProps {
  children: React.ReactNode;
}

function GhostContext({ children }: GhostContextProps) {
  const pronounsRule = useExpandedRule<DevilPronounsRule>('#devil-pronouns#');

  return (
    <div className={styles.ghost} data-testid="generated-ghost">
      <PronounsContext.Provider value={pronounsRule}>
        {children}
      </PronounsContext.Provider>
    </div>
  );
}

function GhostLook() {
  const pronounsRule = useContext(PronounsContext);

  const type = useFlattenedRule(`#[${pronounsRule}]ghost-type#`);
  const look = useFlattenedRule(`#[${pronounsRule}]ghost-look#`);

  return (
    <Fragment>
      This <Text source={type} /> looks to have once been a{' '}
      <Text source={look} emphasis="primary" />.
    </Fragment>
  );
}

function GhostTrait() {
  const pronounsRule = useContext(PronounsContext);

  const they = useFlattenedRule(`#[${pronounsRule}]they.capitalize#`);
  const have = useFlattenedRule(`#[${pronounsRule}]have#`);
  const trait = useFlattenedRule(`#[${pronounsRule}]ghost-trait#`);
  const a = startsWithVowel(trait) ? 'an' : 'a';
  const their = useFlattenedRule(`#[${pronounsRule}]their#`);
  const deathRules = generateRule(`#[${pronounsRule}]ghost-death#`);
  const deathPrefix = useFlattenedRule(
    `#[${pronounsRule}][${deathRules}]death-prefix#`
  );
  const deathHighlight = useFlattenedRule(
    `#[${pronounsRule}][${deathRules}]death-hightlight#`
  );
  const deathPostfix = useFlattenedRule(
    `#[${pronounsRule}][${deathRules}]death-postfix#`
  );

  if (deathPostfix) {
    return (
      <Fragment>
        <Text source={they} /> <Text source={have} /> {a}{' '}
        <Text source={trait} emphasis="secondary" /> look in{' '}
        <Text source={their} /> eyes and <Text source={deathPrefix} />{' '}
        <Text source={deathHighlight} emphasis="secondary" />{' '}
        <Text source={deathPostfix} />.
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Text source={they} /> <Text source={have} /> {a}{' '}
      <Text source={trait} emphasis="secondary" /> look in{' '}
      <Text source={their} /> eyes and <Text source={deathPrefix} />{' '}
      <span className="nowrap">
        <Text source={deathHighlight} emphasis="secondary" />.
      </span>
    </Fragment>
  );
}

function GhostEffect() {
  const pronounsRule = useContext(PronounsContext);

  const effect = useFlattenedRule(`#[${pronounsRule}]ghost-effect.capitalize#`);
  const they = useFlattenedRule(`#[${pronounsRule}]they#`);
  const approach = useFlattenedRule(`approach#[${pronounsRule}]es#`);

  return (
    <Fragment>
      <Text source={effect} emphasis="primary" /> as <Text source={they} />{' '}
      <Text source={approach} />.
    </Fragment>
  );
}

export function Ghost() {
  return (
    <GhostContext>
      <GhostLook /> <GhostTrait /> <GhostEffect />
    </GhostContext>
  );
}
