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

  const { mutate, isLoading: userRegistering } = useMutation(registerUSer)

  const { t } = useTranslation()

  const form = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      confirmPassword: '',
      password: '',
      username: '',
      email: '',
    },
    mode: 'onTouched',
  })

  const { handleSubmit, reset: resetForm } = form

  const submitHandler: SubmitHandler<SignUpFormValues> = (values) => {
    mutate(values, {
      onSuccess: () => {
        resetForm()
        setSignUpSuccess(true)
      },
    })
  }

  return {
    setSignUpSuccess,
    userRegistering,
    submitHandler,
    signUpSuccess,
    handleSubmit,
    form,
    t,
  }
}

export default useSignUp
