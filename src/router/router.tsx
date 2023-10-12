import { NavbarLayout, AuthPageLayout, RootLayout } from '@/components'
import { createBrowserRouter } from 'react-router-dom'
import SuspenseItself from './SuspenseItself'
import ProtectedRoute from './ProtectedRoute'
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
        path: '/',
        element: <ProtectedRoute />,
        children: [
          {
            path: '/profile',
            element: <Profile />,
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
