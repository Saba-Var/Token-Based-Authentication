import { refreshTokenRequest } from '@/services'
import { useDispatch } from 'react-redux'
import { setAccessToken } from '@/store'
import Cookies from 'js-cookie'

export const useRefreshToken = () => {
  const dispatch = useDispatch()

  const getNewAccessTokenByRefresh = async () => {
    try {
      const refreshToken = Cookies.get('refreshToken')

      if (refreshToken) {
        const response = await refreshTokenRequest(refreshToken)
        dispatch(setAccessToken(response?.data?.accessToken))
        return response
      } else {
        return false
      }
    } catch (error: any) {
      return false
    }
  }

  return { getNewAccessTokenByRefresh }
}
