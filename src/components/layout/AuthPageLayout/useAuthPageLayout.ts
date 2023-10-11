import type { AuthPageRoute, AuthQuestionProps } from '@/types'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'

const AuthPageWrapper = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()

  const authQuestionOptions: Record<AuthPageRoute, AuthQuestionProps> = {
    'log-in': {
      questionText: t('dont_have_an_account'),
      redirectUrl: '/auth/sign-up',
      linkText: t('sign_up'),
    },
    'sign-up': {
      questionText: t('already_have_an_account'),
      redirectUrl: '/auth/log-in',
      linkText: t('log_in'),
    },
    'request-password-reset': {
      questionText: t('dont_have_an_account'),
      redirectUrl: '/auth/sign-up',
      linkText: t('sign_up'),
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
