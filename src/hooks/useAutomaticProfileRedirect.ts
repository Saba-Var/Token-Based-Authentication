import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

export const useAutomaticProfileRedirect = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const isRefreshTokenExists = !!Cookies.get('refreshToken')

    if (isRefreshTokenExists) {
      navigate('/profile', { replace: true })
    }
  }, [navigate])
}
