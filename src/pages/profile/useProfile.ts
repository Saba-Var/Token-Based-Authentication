import type { ProfileFormValues, DisabledInputFieldsHandlerValues } from './types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { profileSchema, usernameSchema } from '@/validation'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, type StoreRootState } from '@/store'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import { useUserRequests } from '@/hooks'
import { emitToast } from '@/utils'

const useProfile = () => {
  const initialDisabledInputs = {
    username: true,
    email: true,
  }
  const [showEmailConfirmationSentModal, setShowEmailConfirmationSentModal] = useState(false)
  const [disabledInputFields, setDisabledInputFields] = useState(initialDisabledInputs)
  const [isUserImageLoading, setIsUserImageLoading] = useState(true)

  const { updateUsernameRequest, changeEmailRequest } = useUserRequests()
  const user = useSelector((state: StoreRootState) => state.user)
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const form = useForm<ProfileFormValues>({
    resolver: yupResolver(!disabledInputFields.email ? profileSchema : usernameSchema),
    defaultValues: {
      username: '',
      email: '',
    },
    mode: 'onTouched',
  })

  const {
    formState: { isValid: isFormValid },
    handleSubmit,
    setValue,
    setError,
  } = form

  useEffect(() => {
    setValue('username', user.username)
  }, [setValue, user.username])

  const { mutate: updateUsernameMutation, isLoading: isUserDataUpdating } = useMutation(
    updateUsernameRequest,
    {
      onSuccess: (_data, username) => {
        emitToast(t('username_update_success'), 'success')
        const updatedUserData = { ...user, username }
        queryClient.setQueryData(['user'], { data: updatedUserData })
        form.reset({ username })
        dispatch(setUser(updatedUserData))
        disabledInputFieldsHandler({ disabled: true, name: 'username' })
      },
      onError: (error: any) => {
        if (error.response.status === 409) {
          setError('username', {
            message: t('username_is_taken'),
          })
        }
      },
    },
  )

  const { mutate: requestEmailChangeMutation, isLoading: isEmailChangeRequesting } = useMutation(
    changeEmailRequest,
    {
      onSuccess: () => {
        setShowEmailConfirmationSentModal(true)
        disabledInputFieldsHandler({ disabled: true, name: 'email' })
      },
      onError: (error: any) => {
        if (error.response.status === 409) {
          setError('email', {
            message: t('email_is_taken'),
          })
        }
      },
    },
  )

  const cancelHandler = () => {
    setDisabledInputFields(initialDisabledInputs)
    form.reset({ username: user.username })
  }

  const submitHandler: SubmitHandler<ProfileFormValues> = ({ username, email }) => {
    if (!disabledInputFields.username) {
      updateUsernameMutation(username)
    }
    if (!disabledInputFields.email) {
      requestEmailChangeMutation(email as string)
    }
  }

  const disabledInputFieldsHandler = ({ disabled, name }: DisabledInputFieldsHandlerValues) => {
    setDisabledInputFields((prev) => ({
      ...prev,
      [name]: disabled,
    }))
  }

  return {
    disableFormButtons: isUserDataUpdating || isEmailChangeRequesting || !isFormValid,
    setShowEmailConfirmationSentModal,
    showEmailConfirmationSentModal,
    disabledInputFieldsHandler,
    setIsUserImageLoading,
    disabledInputFields,
    isUserImageLoading,
    isUserDataUpdating,
    cancelHandler,
    submitHandler,
    handleSubmit,
    user,
    form,
    t,
  }
}

export default useProfile
