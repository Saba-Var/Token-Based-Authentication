import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { useUserRequests } from '@/hooks'
import { useDispatch } from 'react-redux'
import { emitToast } from '@/utils'
import { setUser } from '@/store'

const useProfile = () => {
  const { getUserDataRequest } = useUserRequests()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  useQuery(['user'], getUserDataRequest, {
    onSuccess: (data) => dispatch(setUser(data.data)),
    onError: () => emitToast(t('user_data_fetch_fail'), 'error'),
  })
}

export default useProfile
