import { privateAxiosInstance as privateAxios } from '@/services'
import type { InternalAxiosRequestConfig } from 'axios'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useCallback, useEffect } from 'react'
import { useRefreshToken } from '@/hooks'
import { useSelector } from 'react-redux'
import { StoreRootState } from '@/store'
import { emitToast } from '@/utils'
import Cookies from 'js-cookie'

export const useAxiosPrivate = () => {
  const { accessToken } = useSelector((state: StoreRootState) => state.authentication)
  const { getNewAccessTokenByRefresh } = useRefreshToken()
  const { t } = useTranslation()
  const navigate = useNavigate()

  const setRequestAuthorizationHeaders = useCallback(
    (config: InternalAxiosRequestConfig) => {
      if (!config.headers['Authorization']) {
        config.headers['Authorization'] = `Bearer ${accessToken}`
      }

      return config
    },
    [accessToken],
  )

  const privateAxiosResponseErrorhandler = useCallback(
    async (error: any) => {
      const status = error?.response?.status

      if (status === 500) {
        emitToast(t('something_went_wrong'), 'error')
      }

      const previousRequest = error?.config

      if (status === 401 && !previousRequest?.sent) {
        const response: any = await getNewAccessTokenByRefresh()

        const refreshedAccessToken = response?.data?.accessToken
        if (!refreshedAccessToken) {
          Cookies.remove('refreshToken')
          navigate('/')
        }

        previousRequest.sent = true
        previousRequest.headers['Authorization'] = `Bearer ${refreshedAccessToken}`
        return await privateAxios(previousRequest)
      }

      return Promise.reject(error)
    },
    [getNewAccessTokenByRefresh, navigate, t],
  )

  useEffect(() => {
    const requestIntercept = privateAxios.interceptors.request.use(
      setRequestAuthorizationHeaders,
      (error) => Promise.reject(error),
    )

    const responseIntercept = privateAxios.interceptors.response.use(
      (response) => response,
      privateAxiosResponseErrorhandler,
    )

    return () => {
      privateAxios.interceptors.response.eject(responseIntercept)
      privateAxios.interceptors.request.eject(requestIntercept)
    }
  }, [privateAxiosResponseErrorhandler, setRequestAuthorizationHeaders])

  return privateAxios
}
