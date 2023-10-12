import { LoadingIcon } from '@/components'
import { Outlet } from 'react-router-dom'
import { useAuthGuard } from '@/hooks'

const ProtectedRoute = () => {
  const { canViewRoute } = useAuthGuard()

  return <>{canViewRoute ? <Outlet /> : <LoadingIcon centered />}</>
}

export default ProtectedRoute
