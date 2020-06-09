import { renderHook } from '@testing-library/react-hooks';

import * as GrammarModule from '../services/grammar';
import { useExpandedRule } from './use-expanded-rule';

test('should generate text', () => {
  const { result } = renderHook(({ rule }) => useExpandedRule(rule), {
    initialProps: { rule: '#person-pronouns#' }
  });

  expect(result.current).toBeTruthy();
});

test('should re-generate text when new rule is received', () => {
  const spy = jest.spyOn(GrammarModule, 'generateRule');
  const { rerender } = renderHook(({ rule }) => useExpandedRule(rule), {
    initialProps: { rule: '#person-pronouns#' }
  });

  expect(spy).toBeCalledWith('#person-pronouns#');

  spy.mockClear();

  rerender({ rule: '#person-pronouns#' });

  expect(spy).not.toBeCalled();

  spy.mockClear();

  rerender({ rule: '#devil-pronouns#' });

  expect(spy).toBeCalledWith('#devil-pronouns#');
});
