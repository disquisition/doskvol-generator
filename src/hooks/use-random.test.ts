import { act, renderHook } from '@testing-library/react-hooks';

import { useRandom } from './use-random-number';

test('should generate random number', () => {
  const {
    result: {
      current: [value]
    }
  } = renderHook(() => useRandom());

  expect(typeof value).toBe('number');
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
