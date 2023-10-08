import type { AuthPageRoute, AuthQuestionProps } from '@/types'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'

const AuthPageWrapper = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()

  const authQuestionOptions: Record<AuthPageRoute, AuthQuestionProps> = {
    'sign-in': {
      linkText: '',
      questionText: '',
      redirectUrl: '',
    },
    'sign-up': {
      linkText: '',
      questionText: '',
      redirectUrl: '',
    },
  }

  const childRouteName = useMemo(() => {
    return location.pathname.split('/')[2] as AuthPageRoute
  }, [location.pathname])

  const navigateToHome = () => navigate('/')

  return {
    authQuestionPropsData: authQuestionOptions[childRouteName],
    authQuestionOptions,
    navigateToHome,
    childRouteName,
    t,
  }
}

export default AuthPageWrapper
