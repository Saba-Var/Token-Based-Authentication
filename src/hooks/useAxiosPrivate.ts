import { privateAxiosInstance as privateAxios } from '@/services'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useRefreshToken } from '@/hooks'
import { useSelector } from 'react-redux'
import { StoreRootState } from '@/store'
import { emitToast } from '@/utils'
import { useEffect } from 'react'

export const useAxiosPrivate = () => {
  const { accessToken } = useSelector((state: StoreRootState) => state.authentication)

  const { getNewAccessTokenByRefresh } = useRefreshToken()
  const { t } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    const requestIntercept = privateAxios.interceptors.request.use(
      (config: any) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${accessToken}`
        }

        return config
      },

      (error) => Promise.reject(error),
    )

    const responseIntercept = privateAxios.interceptors.response.use(
      (response) => response,

      async (error) => {
        const status = error?.response?.status

        if (status === 500) {
          emitToast(t('something_went_wrong'), 'error')
        }

        const previousRequest = error?.config

        if (status === 401 && !previousRequest?.sent) {
          return getNewAccessTokenByRefresh().then((response: any) => {
            const refreshedAccessToken = response?.data?.accessToken

            if (!refreshedAccessToken) {
              navigate('/')
            }

            previousRequest.sent = true
            previousRequest.headers['Authorization'] = `Bearer ${refreshedAccessToken}`
            return privateAxios(previousRequest)
          })
        }

        return Promise.reject(error)
      },
    )

    return () => {
      privateAxios.interceptors.response.eject(responseIntercept)
      privateAxios.interceptors.request.eject(requestIntercept)
    }
  }, [accessToken, navigate, t, getNewAccessTokenByRefresh])

  return privateAxios
}
