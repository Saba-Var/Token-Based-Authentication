import { StoreRootState, setAccessToken } from '@/store'
import { Outlet, useNavigate } from 'react-router-dom'
import { refreshTokenRequest } from '@/services'
import { useQuery } from '@tanstack/react-query'
import { LoadingIcon } from '@/components'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

const ProtectedRoute = () => {
  const { accessToken } = useSelector((state: StoreRootState) => state.authentication)
  const navigate = useNavigate()
  const refreshToken = Cookies.get('refreshToken') as string

  const { data } = useQuery(['refreshedAccessToken'], () => refreshTokenRequest(refreshToken), {
    onSuccess: (data) => {
      setAccessToken(data.data.accessToken)
    },

    onError: () => navigate('/auth/log-in'),

    enabled: !accessToken && !!refreshToken,
  })

  useEffect(() => {
    if (!refreshToken) {
      navigate('/auth/log-in')
    }
  }, [navigate, refreshToken])

  return <>{data?.data?.accessToken || accessToken ? <Outlet /> : <LoadingIcon centered />}</>
}

export default ProtectedRoute
