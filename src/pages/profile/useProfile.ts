import { useDispatch, useSelector } from 'react-redux'
import { setUser, type StoreRootState } from '@/store'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { useUserRequests } from '@/hooks'
import { useForm } from 'react-hook-form'
import { emitToast } from '@/utils'
import { useState } from 'react'

const useProfile = () => {
  const [isUserImageLoading, setIsUserImageLoading] = useState(true)
  const user = useSelector((state: StoreRootState) => state.user)
  const { getUserDataRequest } = useUserRequests()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const form = useForm<{ username: string; email: string }>({
    defaultValues: {
      username: '',
      email: '',
    },
    mode: 'onTouched',
  })

  const { handleSubmit, setValue } = form

  useQuery(['user'], getUserDataRequest, {
    onSuccess: (data) => {
      dispatch(setUser(data.data))
      setValue('username', data.data.username)
      setValue('email', data.data.email)
    },
    onError: () => emitToast(t('user_data_fetch_fail'), 'error'),
  })

  const submitHandler = () => {}

  return {
    setIsUserImageLoading,
    isUserImageLoading,
    submitHandler,
    handleSubmit,
    user,
    form,
  }
}

export default useProfile
