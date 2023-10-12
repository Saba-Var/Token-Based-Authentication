import { LoadingIcon } from '@/components'
import { Outlet } from 'react-router-dom'
import { useAuthGuard } from '@/hooks'

const ProtectedRoutesGuard = () => {
  const { canViewRoute } = useAuthGuard()

  return <>{canViewRoute ? <Outlet /> : <LoadingIcon centered />}</>
}

export default ProtectedRoutesGuard
