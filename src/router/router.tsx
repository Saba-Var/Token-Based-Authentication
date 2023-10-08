import { RootLayout, AuthPageLayout } from '@/components'
import { createBrowserRouter } from 'react-router-dom'
import { Home, NotFound, SignUp } from '@/pages'
import SuspenseItself from './SuspenseItself'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },

  {
    path: '/auth',
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
    path: '*',
    element: <NotFound />,
  },
])

export default router
