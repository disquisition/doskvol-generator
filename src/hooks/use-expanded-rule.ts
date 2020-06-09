import { useRef, useState } from 'react';

import { generateRule } from '../services/grammar';

export function useExpandedRule<T = string | undefined>(rule: string) {
  const expand = () => generateRule<T>(rule);
  const inputRuleRef = useRef(rule);
  const [expandedRule, updateExpandedRule] = useState(expand);

  if (inputRuleRef.current !== rule) {
    inputRuleRef.current = rule;

    updateExpandedRule(expand());
  }

  return expandedRule;
}
