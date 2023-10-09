import { useSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { accountActivationRequest } from '@/services'
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

const useActivationRequest = () => {
  const [activationStatusCode, setActivationStatusCode] = useState<null | number>(null)

  const [searchParams] = useSearchParams()
  const location = useLocation()
  const navigate = useNavigate()

  const { mutate: activateAccountMutation } = useMutation(accountActivationRequest, {
    onSuccess: (data) => {
      navigate(location.pathname, { replace: true })
      setActivationStatusCode(data.status)
    },

    onError: (error: any) => {
      setActivationStatusCode(error.response.status)
    },
  })

  useEffect(() => {
    const tokenParam = searchParams.get('token')
    if (tokenParam) {
      activateAccountMutation(tokenParam)
    }
  }, [activateAccountMutation, searchParams])

  return { activationStatusCode }
}

export default useActivationRequest
