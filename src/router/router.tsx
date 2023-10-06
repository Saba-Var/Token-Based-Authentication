import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/components'
import { Home, NotFound } from '@/pages'

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
    path: '*',
    element: <NotFound />,
  },
])

export default router
