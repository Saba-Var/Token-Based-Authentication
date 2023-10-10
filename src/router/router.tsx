import { Home, NotFound, SignUp, AccountActivation, LogIn } from '@/pages'
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
            element: <AuthPageLayout />,
            children: [
              {
                path: 'sign-up',
                element: (
                  <SuspenseItself>
                    <SignUp />
                  </SuspenseItself>
                ),
              },
              {
                path: 'log-in',
                element: (
                  <SuspenseItself>
                    <LogIn />
                  </SuspenseItself>
                ),
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
