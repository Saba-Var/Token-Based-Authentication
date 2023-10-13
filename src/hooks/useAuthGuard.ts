import { StoreRootState, setAccessToken, setUser } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { refreshTokenRequest } from '@/services'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useUserRequests } from '@/hooks'
import { emitToast } from '@/utils'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

export const useAuthGuard = () => {
  const { accessToken } = useSelector((state: StoreRootState) => state.authentication)
  const refreshToken = Cookies.get('refreshToken') as string
  const { getUserDataRequest } = useUserRequests()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const { data } = useQuery(['refreshedAccessToken'], () => refreshTokenRequest(refreshToken), {
    onSuccess: (data) => dispatch(setAccessToken(data.data.accessToken)),
    onError: () => navigate('/auth/log-in'),
    enabled: !accessToken && !!refreshToken,
    retry: 2,
  })

  useQuery(['user'], getUserDataRequest, {
    onSuccess: (data) => dispatch(setUser(data.data)),
    onError: () => emitToast(t('user_data_fetch_fail'), 'error'),
    enabled: !!accessToken,
  })

  useEffect(() => {
    if (!refreshToken) {
      navigate('/auth/log-in')
    }
  }, [navigate, refreshToken])

  return { canViewRoute: data?.data?.accessToken || accessToken }
}
