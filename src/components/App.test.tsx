import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { App } from './App';

test('generates person initially', () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId('generated-person')).toBeInTheDocument();
});

test('generates ghost when user clicks ghost button', () => {
  const { getByTestId, getByText } = render(<App />);

  fireEvent.click(getByText('Ghost', { selector: 'button' }));

  expect(getByTestId('generated-ghost')).toBeInTheDocument();
});

test('generates demon when user clicks demon button', () => {
  const { getByTestId, getByText } = render(<App />);

  fireEvent.click(getByText('Demon', { selector: 'button' }));

  expect(getByTestId('generated-demon')).toBeInTheDocument();
});

test('generates new result for each button click', () => {
  const { getByTestId, getByText } = render(<App />);

  const firstResult = getByTestId('generated-person').textContent;

  expect(firstResult).toBeTruthy();

  fireEvent.click(getByText('Person', { selector: 'button' }));

  const secondResult = getByTestId('generated-person').textContent;

  expect(secondResult).not.toBe(firstResult);

  fireEvent.click(getByText('Person', { selector: 'button' }));

  const thirdResult = getByTestId('generated-person').textContent;

  expect(thirdResult).not.toBe(secondResult);
});
