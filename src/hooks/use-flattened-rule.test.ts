import { renderHook } from '@testing-library/react-hooks';

import { useFlattenedRule } from './use-flattened-rule';

test('should generate text', () => {
  const { result } = renderHook(({ rule }) => useFlattenedRule(rule), {
    initialProps: { rule: '#person-name#' }
  });

  expect(result.current).toBeTruthy();
});

test('should re-generate text when new rule is received', () => {
  const { rerender, result } = renderHook(
    ({ rule }) => useFlattenedRule(rule),
    { initialProps: { rule: '#person-name#' } }
  );
  const firstValue = result.current;

  rerender({ rule: '#person-name#' });

  expect(result.current).toBe(firstValue);

  rerender({ rule: '#demon-name#' });

  expect(result.current).not.toBe(firstValue);
});
