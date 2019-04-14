import { useState } from 'react';

let id = 0;

const genId = () => ++id;

export function useId() {
  const [id] = useState(() => genId());

  return String(id);
}
