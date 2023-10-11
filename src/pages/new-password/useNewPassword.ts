import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import type { NewPasswordFormValues } from '@/types'
import { useMutation } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { newPasswordSchema } from '@/validation'
import { newPasswordRequest } from '@/services'
import { useTranslation } from 'react-i18next'
import { emitToast } from '@/utils'
import { useState } from 'react'

const useNewPassword = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const [searchParams] = useSearchParams()
  const { t } = useTranslation()

  const form = useForm({
    resolver: yupResolver(newPasswordSchema),
    defaultValues: {
      passwordConfirmation: '',
      password: '',
    },
    mode: 'onTouched',
  })

  const {
    formState: { isValid: isFormValid },
    reset: resetForm,
    handleSubmit,
  } = form

  const { mutate: newPasswordMutation, isLoading: isPasswordChanging } =
    useMutation(newPasswordRequest)

  const submitHandler: SubmitHandler<NewPasswordFormValues> = ({
    passwordConfirmation,
    password,
  }) => {
    const data = {
      token: searchParams.get('token') as string,
      passwordConfirmation,
      password,
    }

    newPasswordMutation(data, {
      onSuccess: () => {
        setShowSuccessModal(true)
        resetForm()
      },

      onError: () => emitToast(t('password_reset_fail'), 'error'),
    })
  }

  return {
    setShowSuccessModal,
    isPasswordChanging,
    showSuccessModal,
    submitHandler,
    handleSubmit,
    isFormValid,
    form,
    t,
  }
}

export default useNewPassword
