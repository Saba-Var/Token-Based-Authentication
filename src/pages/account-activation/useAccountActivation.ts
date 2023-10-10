import { useSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { teamDiscussing, celebration, stressedMan } from '@/assets'
import { accountActivationRequest } from '@/services'
import { useEffect, useMemo, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

const useActivationRequest = () => {
  const [activationStatusCode, setActivationStatusCode] = useState<null | number>(null)

  const [searchParams] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const { mutate: activateAccountMutation, isLoading } = useMutation(accountActivationRequest, {
    onSuccess: (data) => {
      navigate(location.pathname, { replace: true })
      setActivationStatusCode(data.status)
    },

    onError: (error: any) => {
      const statusCode = error.response.status
      if (statusCode === 409) {
        setActivationStatusCode(error.response.status)
      }
    },

    retry: false,
  })

  useEffect(() => {
    const tokenParam = searchParams.get('token')
    if (tokenParam) {
      activateAccountMutation(tokenParam)
    }
  }, [activateAccountMutation, searchParams])

  const activationResultsStatusData = useMemo(() => {
    return {
      200: {
        text: t('activation-success'),
        redirect: '/auth/log-in',
        image: celebration,
      },
      409: {
        text: t('account_already_activated'),
        redirect: '/auth/log-in',
        image: teamDiscussing,
      },
      fail: {
        text: t('activation_fail'),
        image: stressedMan,
        redirect: '/',
      },
    }
  }, [t])

  const activationResultToShow = useMemo(() => {
    return activationResultsStatusData[
      (activationStatusCode
        ? activationStatusCode
        : 'fail') as keyof typeof activationResultsStatusData
    ]
  }, [activationResultsStatusData, activationStatusCode])

  return { activationResultToShow, isLoading, t }
}

export default useActivationRequest
