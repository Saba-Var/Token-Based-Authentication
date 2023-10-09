import { NavbarLayout, AuthPageLayout, RootLayout } from '@/components'
import { Home, NotFound, SignUp, AccountActivation } from '@/pages'
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
                path: 'sign-in',
                element: <div>Log</div>,
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
