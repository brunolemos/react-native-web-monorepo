/**
 * @format
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitForElement } from '@testing-library/react';

import { App } from 'components/src/App';

test('Renders the shared app', async () => {
  const { getByText, baseElement } = render(<App />);
  const theText = 'Code sharing using Monorepo';

  await waitForElement(() => getByText(theText));
  expect(getByText(theText)).toHaveTextContent(theText);
  expect(baseElement).toMatchSnapshot();
});
