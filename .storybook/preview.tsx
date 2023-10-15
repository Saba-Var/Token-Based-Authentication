import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { Preview } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router'
import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { store } from '../src/store'
import i18n from '../i18n'
import '../src/index.css'

const queryClient = new QueryClient()

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
          <QueryClientProvider client={queryClient}>
            <I18nextProvider i18n={i18n}>
              <Provider store={store}>
                <Story />
              </Provider>
            </I18nextProvider>
          </QueryClientProvider>
        </MemoryRouter>
      </Suspense>
    ),
  ],
}

export default preview
