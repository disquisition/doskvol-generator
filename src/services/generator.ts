import tracery from 'tracery-grammar';

import rawGrammar from './grammar.json';

const grammar = tracery.createGrammar(rawGrammar);

grammar.addModifiers(tracery.baseEngModifiers);

export const generator = {
  generateStreet() {
    return grammar.flatten('#street#');
  },

  generateBuilding() {
    return grammar.flatten('#building#');
  },

  generatePerson() {
    return grammar.flatten('#person#');
  },

  generateGhost() {
    return grammar.flatten('#ghost#');
  },

  generateDemon() {
    return grammar.flatten('#demon#');
  }
};
