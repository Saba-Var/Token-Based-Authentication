import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import type { SignUpFormValues } from '@/types'
import { useTranslation } from 'react-i18next'
import { signUpSchema } from '@/validation'
import { registerUSer } from '@/services'
import { useState } from 'react'

const useSignUp = () => {
  const [signUpSuccess, setSignUpSuccess] = useState(false)

  const { t } = useTranslation()

  const form = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      passwordConfirmation: '',
      password: '',
      username: '',
      email: '',
    },
    mode: 'onTouched',
  })

  const {
    formState: { isValid },
    reset: resetForm,
    handleSubmit,
    setError,
  } = form

  const { mutate: registerUserMutation, isLoading: userRegistering } = useMutation(registerUSer)

  const setFieldErrors = (error: any) => {
    const message = error?.response?.data?.message

    if (message.includes('username')) {
      setError('username', {
        type: 'manual',
        message: t('username_is_taken'),
      })
    }

    if (message.includes('email')) {
      setError('email', {
        type: 'manual',
        message: t('email_is_taken'),
      })
    }
  }

  const submitHandler: SubmitHandler<SignUpFormValues> = (values) => {
    registerUserMutation(values, {
      onSuccess: () => {
        resetForm()
        setSignUpSuccess(true)
      },

      onError: (error: any) => {
        if (error?.response?.status === 409) {
          setFieldErrors(error)
        }
      },
    })
  }

  return {
    setSignUpSuccess,
    userRegistering,
    submitHandler,
    signUpSuccess,
    handleSubmit,
    isValid,
    form,
    t,
  }
}

export default useSignUp
