import React, { createContext, Fragment, useContext } from 'react';

import { useExpandedRule } from '../hooks/use-expanded-rule';
import { useFlattenedRule } from '../hooks/use-flattened-rule';
import { useRandom } from '../hooks/use-random';
import { PersonHeritageRule, PersonPronounsRule } from '../services/grammar';
import styles from './Person.module.scss';
import { Text } from './Text';

const HeritageContext = createContext(PersonHeritageRule.Akorosi);
const PronounsContext = createContext(PersonPronounsRule.Neutral);

interface PersonContextProps {
  children: React.ReactNode;
}

function PersonContext({ children }: PersonContextProps) {
  const heritageRule = useExpandedRule<PersonHeritageRule>('#person-heritage#');
  const pronounsRule = useExpandedRule<PersonPronounsRule>('#person-pronouns#');

  return (
    <div className={styles.person} data-testid="generated-person">
      <HeritageContext.Provider value={heritageRule}>
        <PronounsContext.Provider value={pronounsRule}>
          {children}
        </PronounsContext.Provider>
      </HeritageContext.Provider>
    </div>
  );
}

function PersonStyle() {
  const heritageRule = useContext(HeritageContext);
  const pronounsRule = useContext(PronounsContext);

  const personalStyleItem = useFlattenedRule(
    `#[${pronounsRule}][${heritageRule}]person-style-item#`
  );
  const personalDisabilityItem = useFlattenedRule(
    `#[${pronounsRule}][${heritageRule}]person-disability-item#`
  );
  const personalStyleItems = useFlattenedRule(
    `#[${pronounsRule}][${heritageRule}]person-style-items#`
  );
  const personalStyleItem1 = useFlattenedRule(
    `#[${pronounsRule}][${heritageRule}]person-style-item-1#`
  );
  const personalStyleItem2 = useFlattenedRule(
    `#[${pronounsRule}][${heritageRule}]person-style-item-2#`
  );

  const [random] = useRandom();

  if (random >= 0.9) {
    return (
      <Fragment>
        <Text source={personalStyleItem} emphasis="secondary" /> and{' '}
        <span className="nowrap">
          <Text source={personalDisabilityItem} emphasis="secondary" />.
        </span>
      </Fragment>
    );
  }

  if (random >= 0.7) {
    return (
      <span className="nowrap">
        <Text source={personalStyleItems} emphasis="secondary" />.
      </span>
    );
  }

  return (
    <Fragment>
      <Text source={personalStyleItem1} emphasis="secondary" /> and{' '}
      <span className="nowrap">
        <Text source={personalStyleItem2} emphasis="secondary" />.
      </span>
    </Fragment>
  );
}

function PersonLook() {
  const heritageRule = useContext(HeritageContext);
  const pronounsRule = useContext(PronounsContext);

  const name = useFlattenedRule(
    `#[${pronounsRule}][${heritageRule}]person-name#`
  );
  const pronouns = useFlattenedRule(`#[${pronounsRule}]pronouns#`);
  const look = useFlattenedRule(
    `#[${pronounsRule}][${heritageRule}]person-look#`
  );
  const demonicTrait = useFlattenedRule(
    `#[${pronounsRule}][${heritageRule}]person-demonic-trait#`
  );
  const detail = useFlattenedRule(
    `#[${pronounsRule}][${heritageRule}]person-look-detail#`
  );

  const [random] = useRandom();

  if (heritageRule === PersonHeritageRule.Tycherosi) {
    return (
      <Fragment>
        <Text className={styles.personName} source={name} /> (
        <Text source={pronouns} />) is <Text source={look} emphasis="primary" />{' '}
        who <Text source={demonicTrait} /> and wears <PersonStyle />
      </Fragment>
    );
  }

  if (random >= 0.66) {
    return (
      <Fragment>
        <Text className={styles.personName} source={name} /> (
        <Text source={pronouns} />) is <Text source={look} emphasis="primary" />{' '}
        who <Text source={detail} /> and wears <PersonStyle />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Text className={styles.personName} source={name} /> (
      <Text source={pronouns} />
      ) is <Text source={look} emphasis="primary" /> who wears <PersonStyle />
    </Fragment>
  );
}

function PersonGoal() {
  const heritageRule = useContext(HeritageContext);
  const pronounsRule = useContext(PronounsContext);

  const they = useFlattenedRule(`#[${pronounsRule}]they.capitalize#`);
  const goal = useFlattenedRule(
    `#[${pronounsRule}][${heritageRule}]person-goal#`
  );
  const segue = useFlattenedRule(
    `#[${pronounsRule}][${heritageRule}]person-method-segue#`
  );
  const method = useFlattenedRule(
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

function PersonTraits() {
  const heritageRule = useContext(HeritageContext);
  const pronounsRule = useContext(PronounsContext);

  const theyre = useFlattenedRule(
    `#[${pronounsRule}][${heritageRule}]they're.capitalize#`
  );
  const trait = useFlattenedRule(
    `#[${pronounsRule}][${heritageRule}]person-trait#`
  );
  const quirk = useFlattenedRule(
    `#[${pronounsRule}][${heritageRule}]person-quirk#`
  );

  return (
    <Fragment>
      <Text source={theyre} /> <Text source={trait} emphasis="secondary" /> and{' '}
      <Text source={quirk} emphasis="primary" />.
    </Fragment>
  );
}

function PersonInterests() {
  const heritageRule = useContext(HeritageContext);
  const pronounsRule = useContext(PronounsContext);

  const [random] = useRandom();

  const interestTypes = ['activity', 'activity', 'devotion', 'study'];
  const interestType = interestTypes[Math.floor(random * interestTypes.length)];

  const they = useFlattenedRule(
    `#[${pronounsRule}][${heritageRule}]they.capitalize#`
  );
  const verb = useFlattenedRule(
    `#[${pronounsRule}][${heritageRule}]person-interest-${interestType}-verb#`
  );
  const interest = useFlattenedRule(
    `#[${pronounsRule}][${heritageRule}]person-interest-${interestType}-subject#`
  );

  return (
    <Fragment>
      <Text source={they} /> <Text source={verb} />{' '}
      <Text source={interest} emphasis="primary" />.
    </Fragment>
  );
}

export function Person() {
  const [random] = useRandom();

  if (random >= 0.7) {
    return (
      <PersonContext>
        <PersonLook /> <PersonGoal />
      </PersonContext>
    );
  }

  if (random >= 0.6) {
    return (
      <PersonContext>
        <PersonLook /> <PersonGoal /> <PersonInterests />
      </PersonContext>
    );
  }

  return (
    <PersonContext>
      <PersonLook /> <PersonInterests /> <PersonTraits />
    </PersonContext>
  );
}
