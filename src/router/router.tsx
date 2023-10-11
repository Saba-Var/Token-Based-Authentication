import { Home, NotFound, SignUp, AccountActivation, LogIn, RequestPasswordReset } from '@/pages'
import { NavbarLayout, AuthPageLayout, RootLayout } from '@/components'
import { createBrowserRouter } from 'react-router-dom'
import SuspenseItself from './SuspenseItself'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <NavbarLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },

      {
        path: '/auth',
        children: [
          {
            element: (
              <SuspenseItself>
                <AuthPageLayout />
              </SuspenseItself>
            ),
            children: [
              {
                path: 'sign-up',
                element: <SignUp />,
              },
              {
                path: 'log-in',
                element: <LogIn />,
              },
              {
                path: 'request-password-reset',
                element: <RequestPasswordReset />,
              },
            ],
          },

          {
            path: 'account-activation',
            element: <AccountActivation />,
          },
        ],
      },

      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export default router
