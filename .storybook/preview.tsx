import type { Preview } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router'
import React, { Suspense } from 'react'
import i18n from '../i18n'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <Suspense fallback={<div>loading...</div>}>
        <MemoryRouter>
          <I18nextProvider i18n={i18n}>
            <Story />
          </I18nextProvider>
        </MemoryRouter>
      </Suspense>
    ),
  ],
}

export default preview
