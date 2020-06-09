import { act, renderHook } from '@testing-library/react-hooks';

import { useRandom } from './use-random';

test('should generate random number', () => {
  const {
    result: {
      current: [value]
    }
  } = renderHook(() => useRandom());

  expect(typeof value).toBe('number');
});

test('should generate random number in range', () => {
  const min = 5;
  const max = 10;
  const {
    result: {
      current: [value]
    }
  } = renderHook(() => useRandom(min, max));

  expect(typeof value).toBe('number');
  expect(value).toBeGreaterThanOrEqual(min);
  expect(value).toBeLessThan(max);
});

test('should re-generate random number when update callback is called', () => {
  const { rerender, result } = renderHook(() => useRandom());
  const [firstValue, updateValue] = result.current;

  rerender();

  const [secondValue] = result.current;

  expect(secondValue).toBe(firstValue);

  act(() => {
    updateValue();
  });

  const [thirdValue] = result.current;

  expect(thirdValue).not.toBe(firstValue);
});
