import useRootLayout from './useRootLayout'
import { LoadingIcon } from '@/components'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

const RootLayout = () => {
  useRootLayout()

  return (
    <Suspense fallback={<LoadingIcon centered />}>
      <Outlet />
    </Suspense>
  )
}

export default RootLayout
