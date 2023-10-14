import { NavbarLayout, AuthPageLayout, RootLayout } from '@/components'
import ProtectedRoutesGuard from './ProtectedRoutesGuard'
import { createBrowserRouter } from 'react-router-dom'
import SuspenseItself from './SuspenseItself'
import {
  RequestPasswordReset,
  AccountActivation,
  NewPassword,
  NotFound,
  Profile,
  SignUp,
  LogIn,
  Home,
} from '@/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: (
          <SuspenseItself>
            <NavbarLayout />
          </SuspenseItself>
        ),
        children: [
          {
            index: true,
            element: <Home />,
          },

          {
            path: '/',
            element: <ProtectedRoutesGuard />,
            children: [
              {
                path: '/profile',
                element: <Profile />,
              },
            ],
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
              {
                path: 'new-password',
                element: <NewPassword />,
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
