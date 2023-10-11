import { useForm, type SubmitHandler } from 'react-hook-form'
import { passwordResetEmailRequest } from '@/services'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { emailSchema } from '@/validation'
import { useState } from 'react'

const useRequestPasswordReset = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const { t } = useTranslation()

  const form = useForm({
    resolver: yupResolver(emailSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onTouched',
  })

  const {
    formState: { isValid: isFormValid },
    reset: resetForm,
    handleSubmit,
    setError,
  } = form

  const { mutate: changePasswordRequestMutation, isLoading } = useMutation(
    passwordResetEmailRequest,
    {
      onSuccess: () => {
        resetForm()
        setShowSuccessModal(true)
      },
      onError: (error: any) => {
        const statusCode = error?.response?.status

        if (statusCode === 403) {
          setError('email', {
            message: t('account_is_not_activated'),
          })
        } else if (statusCode === 404) {
          setError('email', {
            message: t('user_with_this_email_not_found'),
          })
        }
      },
    },
  )

  const submitHandler: SubmitHandler<{ email: string }> = ({ email }) => {
    changePasswordRequestMutation(email)
  }

  return {
    setShowSuccessModal,
    showSuccessModal,
    submitHandler,
    handleSubmit,
    isFormValid,
    isLoading,
    form,
    t,
  }
}

export default useRequestPasswordReset
