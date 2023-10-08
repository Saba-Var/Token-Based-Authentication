import { Suspense } from 'react'

const SuspenseItself = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={children}>{children}</Suspense>
}

export default SuspenseItself
