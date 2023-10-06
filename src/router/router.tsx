import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/components'
import { Home } from '@/pages'

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
])

export default router
