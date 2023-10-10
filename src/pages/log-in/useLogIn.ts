import { useForm, type SubmitHandler } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import type { LogInFormValues } from '@/types'
import { useTranslation } from 'react-i18next'
import { logInRequest } from '@/services'

const useLogin = () => {
  const { mutate: submitForm, isLoading: authorizing } = useMutation(logInRequest)

  const { t } = useTranslation()

  const form = useForm({
    defaultValues: {
      rememberMe: false,
      password: '',
      email: '',
    },
    mode: 'onTouched',
  })

  const { handleSubmit, setError } = form

  const submitHandler: SubmitHandler<LogInFormValues> = (formValues) => {
    submitForm(formValues, {
      onSuccess: (_response, variables: LogInFormValues) => {
        const { rememberMe } = variables
        console.log(rememberMe)
      },

      onError: (error: any) => {
        const status = error?.response?.status
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
      },
    })
  }

  return {
    submitHandler,
    handleSubmit,
    authorizing,
    form,
    t,
  }
}

export default useLogin
