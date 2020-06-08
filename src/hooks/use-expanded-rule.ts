import { useCallback, useRef,useState } from 'react';

import { generateRule } from '../services/grammar';

export function useExpandedRule<T = string | undefined>(rule: string) {
  const expand = useCallback(() => generateRule<T>(rule), [rule]);
  const inputRuleRef = useRef(rule);
  const [expandedRule, updateExpandedRule] = useState(expand);

  if (inputRuleRef.current !== rule) {
    updateExpandedRule(expand());
  }

  return expandedRule;
}
