import React, { Fragment } from 'react';

import { Text } from '../components/Text';
import {
  generateRule,
  grammar,
  PersonHeritageRule,
  PersonPronounsRule
} from './grammar';
import styles from './person-generator.module.scss';

function generatePersonStyle(
  heritageRule: PersonHeritageRule,
  pronounsRule: PersonPronounsRule
) {
  const rn = Math.random();

  if (rn >= 0.9) {
    const item1 = grammar.flatten(
      `#[${pronounsRule}][${heritageRule}]person-style-item#`
    );
    const item2 = grammar.flatten(
      `#[${pronounsRule}][${heritageRule}]person-disability-item#`
    );

    return (
      <Fragment>
        <Text source={item1} emphasis="secondary" /> and{' '}
        <span className="nowrap">
          <Text source={item2} emphasis="secondary" />.
        </span>
      </Fragment>
    );
  }

  if (rn >= 0.7) {
    const items = grammar.flatten(
      `#[${pronounsRule}][${heritageRule}]person-style-items#`
    );

    return (
      <span className="nowrap">
        <Text source={items} emphasis="secondary" />.
      </span>
    );
  }

  const item1 = grammar.flatten(
    `#[${pronounsRule}][${heritageRule}]person-style-item-1#`
  );
  const item2 = grammar.flatten(
    `#[${pronounsRule}][${heritageRule}]person-style-item-2#`
  );

  return (
    <Fragment>
      <Text source={item1} emphasis="secondary" /> and{' '}
      <span className="nowrap">
        <Text source={item2} emphasis="secondary" />.
      </span>
    </Fragment>
  );
}

function generatePersonLook(
  heritageRule: PersonHeritageRule,
  pronounsRule: PersonPronounsRule
) {
  const name = grammar.flatten(
    `#[${pronounsRule}][${heritageRule}]person-name#`
  );
  const pronouns = grammar.flatten(`#[${pronounsRule}]pronouns#`);
  const look = grammar.flatten(
    `#[${pronounsRule}][${heritageRule}]person-look#`
  );
  const style = generatePersonStyle(heritageRule, pronounsRule);

  if (heritageRule === PersonHeritageRule.Tycherosi) {
    const demonicTrait = grammar.flatten(
      `#[${pronounsRule}][${heritageRule}]person-demonic-trait#`
    );

    return (
      <Fragment>
        <Text className={styles.personName} source={name} /> (
        <Text source={pronouns} />) is <Text source={look} emphasis="primary" />{' '}
        who <Text source={demonicTrait} /> and wears {style}
      </Fragment>
    );
  }

  const rn = Math.random();

  if (rn >= 0.66) {
    const detail = grammar.flatten(
      `#[${pronounsRule}][${heritageRule}]person-look-detail#`
    );

    return (
      <Fragment>
        <Text className={styles.personName} source={name} /> (
        <Text source={pronouns} />) is <Text source={look} emphasis="primary" />{' '}
        who <Text source={detail} /> and wears {style}
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Text className={styles.personName} source={name} /> (
      <Text source={pronouns} />
      ) is <Text source={look} emphasis="primary" /> who wears {style}
    </Fragment>
  );
}

function generatePersonGoal(
  heritageRule: PersonHeritageRule,
  pronounsRule: PersonPronounsRule
) {
  const they = grammar.flatten(`#[${pronounsRule}]they.capitalize#`);
  const goal = grammar.flatten(
    `#[${pronounsRule}][${heritageRule}]person-goal#`
  );
  const segue = grammar.flatten(
    `#[${pronounsRule}][${heritageRule}]person-method-segue#`
  );
  const method = grammar.flatten(
    `#[${pronounsRule}][${heritageRule}]person-method#`
  );

  return (
    <Fragment>
      <Text source={they} /> <Text source={goal} emphasis="primary" /> and{' '}
      <Text source={segue} />{' '}
      <span className="nowrap">
        <Text source={method} emphasis="secondary" />.
      </span>
    </Fragment>
  );
}

function generatePersonTraits(
  heritageRule: PersonHeritageRule,
  pronounsRule: PersonPronounsRule
) {
  const theyre = grammar.flatten(
    `#[${pronounsRule}][${heritageRule}]they're.capitalize#`
  );
  const trait = grammar.flatten(
    `#[${pronounsRule}][${heritageRule}]person-trait#`
  );
  const quirk = grammar.flatten(
    `#[${pronounsRule}][${heritageRule}]person-quirk#`
  );

  return (
    <Fragment>
      <Text source={theyre} /> <Text source={trait} emphasis="secondary" /> and{' '}
      <Text source={quirk} emphasis="primary" />.
    </Fragment>
  );
}

function generatePersonInterests(
  heritageRule: PersonHeritageRule,
  pronounsRule: PersonPronounsRule
) {
  const they = grammar.flatten(
    `#[${pronounsRule}][${heritageRule}]they.capitalize#`
  );
  const interestTypes = ['activity', 'activity', 'devotion', 'study'];
  const interestType =
    interestTypes[Math.floor(Math.random() * interestTypes.length)];
  const verb = grammar.flatten(
    `#[${pronounsRule}][${heritageRule}]person-interest-${interestType}-verb#`
  );
  const interest = grammar.flatten(
    `#[${pronounsRule}][${heritageRule}]person-interest-${interestType}-subject#`
  );

  return (
    <Fragment>
      <Text source={they} /> <Text source={verb} />{' '}
      <Text source={interest} emphasis="primary" />.
    </Fragment>
  );
}

export function generatePerson() {
  const heritageRule = generateRule<PersonHeritageRule>('#person-heritage#');
  const pronounsRule = generateRule<PersonPronounsRule>('#person-pronouns#');

  const rn = Math.random();
  const look = generatePersonLook(heritageRule, pronounsRule);

  if (rn >= 0.7) {
    const goal = generatePersonGoal(heritageRule, pronounsRule);

    return (
      <Fragment>
        {look} {goal}
      </Fragment>
    );
  }

  const interest = generatePersonInterests(heritageRule, pronounsRule);

  if (rn >= 0.6) {
    const goal = generatePersonGoal(heritageRule, pronounsRule);

    return (
      <Fragment>
        {look} {goal} {interest}
      </Fragment>
    );
  }

  const traits = generatePersonTraits(heritageRule, pronounsRule);

  return (
    <Fragment>
      {look} {interest} {traits}
    </Fragment>
  );
}
