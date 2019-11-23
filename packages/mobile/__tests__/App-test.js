import React from 'react';
import '@testing-library/jest-native/extend-expect';
import {render, waitForElement} from '@testing-library/react-native';

import {App} from 'components/src/App';

test('Renders the shared app', async () => {
  const {getByText, baseElement} = render(<App />);
  const theText = 'Code sharing using Monorepo';

  await waitForElement(() => getByText(theText));
  expect(getByText(theText)).toHaveTextContent(theText);
  expect(baseElement).toMatchSnapshot();
});
