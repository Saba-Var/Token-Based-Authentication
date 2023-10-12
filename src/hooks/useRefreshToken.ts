import { refreshTokenRequest } from '@/services'
import { useDispatch } from 'react-redux'
import { setAccessToken } from '@/store'

export const useRefreshToken = () => {
  const dispatch = useDispatch()

  const refreshToken = async () => {
    try {
      const response = await refreshTokenRequest()

      dispatch(setAccessToken(response?.data?.accessToken))

      return response
    } catch (error: any) {
      return false
    }
  }

  return refreshToken
}
