import { useDispatch, useSelector } from 'react-redux'
import { setUser, type StoreRootState } from '@/store'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { useUserRequests } from '@/hooks'
import { useForm } from 'react-hook-form'
import { ProfileForm } from './types'
import { emitToast } from '@/utils'
import { useState } from 'react'

const useProfile = () => {
  const initialDisabledInputs = {
    username: true,
    email: true,
  }
  const [disabledInputFields, setDisabledInputFields] = useState(initialDisabledInputs)
  const [isUserImageLoading, setIsUserImageLoading] = useState(true)

  const user = useSelector((state: StoreRootState) => state.user)
  const { getUserDataRequest } = useUserRequests()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const form = useForm<ProfileForm>({
    defaultValues: {
      username: '',
      email: '',
    },
    mode: 'onTouched',
  })

  const { handleSubmit, setValue } = form

  useQuery(['user'], getUserDataRequest, {
    onSuccess: (data) => {
      setValue('username', data.data.username)
      setValue('email', data.data.email)
      dispatch(setUser(data.data))
    },
    onError: () => emitToast(t('user_data_fetch_fail'), 'error'),
  })

  const disabledInputFieldsHandler = (name: keyof typeof disabledInputFields) => {
    setDisabledInputFields((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  const cancelHandler = () => {
    setDisabledInputFields(initialDisabledInputs)
    form.reset({ email: user.email, username: user.username })
  }

  const submitHandler = () => {}

  return {
    disabledInputFieldsHandler,
    setIsUserImageLoading,
    disabledInputFields,
    isUserImageLoading,
    cancelHandler,
    submitHandler,
    handleSubmit,
    user,
    form,
    t,
  }
}

export default useProfile
