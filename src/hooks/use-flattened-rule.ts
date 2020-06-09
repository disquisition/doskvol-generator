import { useRef, useState } from 'react';

import { grammar } from '../services/grammar';

export function useFlattenedRule(rule: string) {
  const flatten = () => grammar.flatten(rule);
  const inputRuleRef = useRef(rule);
  const [flattenedRule, updateFlattenedRule] = useState(flatten);

  if (inputRuleRef.current !== rule) {
    inputRuleRef.current = rule;

    updateFlattenedRule(flatten());
  }

  return flattenedRule;
}
