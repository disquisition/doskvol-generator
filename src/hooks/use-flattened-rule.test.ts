import { renderHook } from '@testing-library/react-hooks';

import { grammar } from '../services/grammar';
import { useFlattenedRule } from './use-flattened-rule';

test('should generate text', () => {
  const { result } = renderHook(({ rule }) => useFlattenedRule(rule), {
    initialProps: { rule: '#person-name#' }
  });

  expect(result.current).toBeTruthy();
});

test('should re-generate text when new rule is received', () => {
  const spy = jest.spyOn(grammar, 'flatten');
  const { rerender } = renderHook(({ rule }) => useFlattenedRule(rule), {
    initialProps: { rule: '#person-name#' }
  });

  expect(spy).toBeCalledWith('#person-name#');

  spy.mockClear();

  rerender({ rule: '#person-name#' });

  expect(spy).not.toBeCalled();

  spy.mockClear();

  rerender({ rule: '#demon-name#' });

  expect(spy).toBeCalledWith('#demon-name#');
});
