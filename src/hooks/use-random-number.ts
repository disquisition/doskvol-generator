import { useState } from 'react';

export function useRandom(): [number, () => void] {
  const [random, updateRandom] = useState(() => Math.random());

  return [random, () => updateRandom(Math.random())];
}
