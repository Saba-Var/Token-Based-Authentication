import { useForm, type SubmitHandler } from 'react-hook-form'
import { passwordResetEmailRequest } from '@/services'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { emailSchema } from '@/validation'

const useRequestPasswordReset = () => {
  const { t } = useTranslation()

  const { mutate: changePasswordRequestMutation, isLoading } =
    useMutation(passwordResetEmailRequest)

  const form = useForm({
    resolver: yupResolver(emailSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onTouched',
  })

  const {
    formState: { isValid: isFormValid },
    handleSubmit,
  } = form

  const submitHandler: SubmitHandler<{ email: string }> = ({ email }) => {
    changePasswordRequestMutation(email)
  }

  return { t, isLoading, form, submitHandler, handleSubmit, isFormValid }
}

export default useRequestPasswordReset
