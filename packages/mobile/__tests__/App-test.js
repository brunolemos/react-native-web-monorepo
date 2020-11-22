import React from 'react'
import '@testing-library/jest-native/extend-expect'
import { render, waitFor } from '@testing-library/react-native'

import { App } from 'components/src/App'

test('Renders the shared app', async () => {
  const { getByText } = render(<App />)
  const theText = 'Code sharing using Monorepo'

  await waitFor(() => getByText(theText))
  expect(getByText(theText)).toHaveTextContent(theText)
})
