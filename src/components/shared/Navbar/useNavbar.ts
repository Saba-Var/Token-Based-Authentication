import { useLocation, useNavigate } from 'react-router-dom'
import { removeAccessToken, removeUser } from '@/store'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'
import Cookies from 'js-cookie'

const useNavbar = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(removeAccessToken())
    dispatch(removeUser())
    Cookies.remove('refreshToken')
    navigate('/')
  }

  const isProfilePage = useMemo(() => {
    return location.pathname === '/profile'
  }, [location.pathname])

  return { t, isProfilePage, logoutHandler }
}

export default useNavbar
