import { useCallback, useState } from 'react';

function getRandomNumberBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function useRandom(min = 0, max = 1): [number, () => void] {
  const [random, updateRandom] = useState(() =>
    getRandomNumberBetween(min, max)
  );
  const update = useCallback(
    () => updateRandom(getRandomNumberBetween(min, max)),
    [max, min]
  );

  return [random, update];
}
