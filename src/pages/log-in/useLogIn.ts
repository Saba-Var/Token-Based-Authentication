import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import type { LogInFormValues } from '@/types'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { logInSchema } from '@/validation'
import { logInRequest } from '@/services'
import { useDispatch } from 'react-redux'
import { setAccessToken } from '@/store'
import Cookies from 'js-cookie'

const useLogin = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { mutate: logInMutation, isLoading: authorizing } = useMutation(logInRequest)

  const form = useForm({
    resolver: yupResolver(logInSchema),
    defaultValues: {
      rememberMe: false,
      password: '',
      email: '',
    },
    mode: 'onTouched',
  })

  const {
    formState: { isValid },
    handleSubmit,
    setError,
  } = form

  const setValidationErrors = (status: number) => {
    if (status === 401) {
      setError('email', {
        message: 'incorrect_credentials',
      })
      setError('password', {
        message: 'incorrect_credentials',
      })
    } else if (status === 403) {
      setError('email', {
        message: 'inactive_account',
      })
      setError('password', {
        message: 'inactive_account',
      })
    }
  }

  const submitHandler: SubmitHandler<LogInFormValues> = (formValues) => {
    logInMutation(formValues, {
      onSuccess: (response, { rememberMe }: LogInFormValues) => {
        Cookies.set('refreshToken', response.data.refreshToken, {
          expires: rememberMe ? 7 : undefined,
          sameSite: 'strict',
          secure: true,
        })
        dispatch(setAccessToken(response.data.accessToken))
        navigate('/profile')
      },

      onError: (error: any) => {
        const status = error?.response?.status
        setValidationErrors(status)
      },
    })
  }

  return {
    submitHandler,
    handleSubmit,
    authorizing,
    isValid,
    form,
    t,
  }
}

export default useLogin
