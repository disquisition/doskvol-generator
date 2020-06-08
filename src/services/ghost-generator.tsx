import React, { Fragment } from 'react';

import { Text } from '../components/Text';
import { startsWithVowel } from '../helpers/starts-with-vowel';
import { DevilPronounsRule, generateRule, grammar } from './grammar';

function generateGhostLook(pronounsRule: DevilPronounsRule) {
  const type = grammar.flatten(`#[${pronounsRule}]ghost-type#`);
  const look = grammar.flatten(`#[${pronounsRule}]ghost-look#`);

  return (
    <Fragment>
      This <Text source={type} /> looks to have once been a{' '}
      <Text source={look} emphasis="primary" />.
    </Fragment>
  );
}

function generateGhostTrait(pronounsRule: DevilPronounsRule) {
  const they = grammar.flatten(`#[${pronounsRule}]they.capitalize#`);
  const have = grammar.flatten(`#[${pronounsRule}]have#`);
  const trait = grammar.flatten(`#[${pronounsRule}]ghost-trait#`);
  const a = startsWithVowel(trait) ? 'an' : 'a';
  const their = grammar.flatten(`#[${pronounsRule}]their#`);
  const deathRules = generateRule(`#[${pronounsRule}]ghost-death#`);
  const deathPrefix = grammar.flatten(
    `#[${pronounsRule}][${deathRules}]death-prefix#`
  );
  const deathHighlight = grammar.flatten(
    `#[${pronounsRule}][${deathRules}]death-hightlight#`
  );
  const deathPostfix = grammar.flatten(
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

function generateGhostEffect(pronounsRule: DevilPronounsRule) {
  const effect = grammar.flatten(`#[${pronounsRule}]ghost-effect.capitalize#`);
  const they = grammar.flatten(`#[${pronounsRule}]they#`);
  const approach = grammar.flatten(`approach#[${pronounsRule}]es#`);

  return (
    <Fragment>
      <Text source={effect} emphasis="primary" /> as <Text source={they} />{' '}
      <Text source={approach} />.
    </Fragment>
  );
}

export function generateGhost() {
  const pronounsRule = generateRule<DevilPronounsRule>('#devil-pronouns#');

  const look = generateGhostLook(pronounsRule);
  const trait = generateGhostTrait(pronounsRule);
  const effect = generateGhostEffect(pronounsRule);

  return (
    <Fragment>
      {look} {trait} {effect}
    </Fragment>
  );
}
