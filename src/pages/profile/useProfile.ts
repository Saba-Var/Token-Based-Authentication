import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, type StoreRootState } from '@/store'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'
import { usernameSchema } from '@/validation'
import { useUserRequests } from '@/hooks'
import { emitToast } from '@/utils'
import { useState } from 'react'

const useProfile = () => {
  const initialDisabledInputs = {
    username: true,
    email: true,
  }
  const [disabledInputFields, setDisabledInputFields] = useState(initialDisabledInputs)
  const [isUserImageLoading, setIsUserImageLoading] = useState(true)

  const { getUserDataRequest, updateUsernameRequest } = useUserRequests()
  const queryClient = useQueryClient()
  const user = useSelector((state: StoreRootState) => state.user)
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const form = useForm<{ username: string }>({
    resolver: yupResolver(usernameSchema),
    defaultValues: {
      username: '',
    },
    mode: 'onTouched',
  })

  const {
    formState: { isValid: isUsernameValid },
    handleSubmit,
    setValue,
    setError,
  } = form

  useQuery(['user'], getUserDataRequest, {
    onSuccess: (data) => {
      setValue('username', data.data.username)
      dispatch(setUser(data.data))
    },
    onError: () => emitToast(t('user_data_fetch_fail'), 'error'),
  })

  const { mutate: updateUsernameMutation, isLoading: isUserDataUpdating } =
    useMutation(updateUsernameRequest)

  const disabledInputFieldsHandler = (name: keyof typeof disabledInputFields) => {
    setDisabledInputFields((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  const cancelHandler = () => {
    setDisabledInputFields(initialDisabledInputs)
    form.reset({ username: user.username })
  }

  const submitHandler: SubmitHandler<{ username: string }> = ({ username }) => {
    updateUsernameMutation(username, {
      onSuccess: () => {
        emitToast(t('user_data_update_success'), 'success')
        const updatedUserData = { ...user, username }
        queryClient.setQueryData(['user'], { data: updatedUserData })
        form.reset({ username })
        dispatch(setUser(updatedUserData))
        disabledInputFieldsHandler('username')
      },
      onError: (error: any) => {
        if (error.response.status === 409) {
          setError('username', {
            message: t('username_is_taken'),
          })
        }
      },
    })
  }

  return {
    disabledInputFieldsHandler,
    setIsUserImageLoading,
    disabledInputFields,
    isUserImageLoading,
    isUserDataUpdating,
    isUsernameValid,
    cancelHandler,
    submitHandler,
    handleSubmit,
    user,
    form,
    t,
  }
}

export default useProfile
