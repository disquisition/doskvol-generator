import { renderHook } from '@testing-library/react-hooks';

import { useExpandedRule } from './use-expanded-rule';

test('should generate text', () => {
  const { result } = renderHook(({ rule }) => useExpandedRule(rule), {
    initialProps: { rule: '#person-pronouns#' }
  });

  expect(result.current).toBeTruthy();
});

test('should re-generate text when new rule is received', () => {
  const { rerender, result } = renderHook(({ rule }) => useExpandedRule(rule), {
    initialProps: { rule: '#person-pronouns#' }
  });
  const firstValue = result.current;

  rerender({ rule: '#person-pronouns#' });

  expect(result.current).toBe(firstValue);

  rerender({ rule: '#devil-pronouns#' });

  expect(result.current).not.toBe(firstValue);
});
