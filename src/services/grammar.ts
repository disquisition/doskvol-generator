import tracery from 'tracery-grammar';

import rawGrammar from './grammar.json';

export const grammar = tracery.createGrammar(rawGrammar);

grammar.addModifiers(tracery.baseEngModifiers);

export enum PersonHeritageRule {
  Akorosi = '#person-heritage-akorosi#',
  Skovlander = '#person-heritage-skovlander#',
  Iruvian = '#person-heritage-iruvian#',
  DaggerIslander = '#person-heritage-dagger-islander#',
  Severosi = '#person-heritage-severosi#',
  Tycherosi = '#person-heritage-tycherosi#'
}

export enum PersonPronounsRule {
  Masculine = '#person-pronouns-masculine#',
  Feminine = '#person-pronouns-feminine#',
  Neutral = '#person-pronouns-neutral#'
}

export enum DevilPronounsRule {
  PersonMasculine = '#person-pronouns-masculine#',
  PersonFeminine = '#person-pronouns-feminine#',
  PersonNeutral = '#person-pronouns-neutral#[being:humanoid]',
  DevilNeutral = '#devil-pronouns-neutral#'
}

export function generateRule<T = string | undefined>(rule: string): T {
  const parent = grammar.expand(rule);
  let child = parent;

  while (child.type !== 1 && child.children?.[0]) {
    child = child.children[0];
  }

  return child.childRule as any;
}
