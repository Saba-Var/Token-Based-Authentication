import type { AxiosResponse } from 'axios'
import { useAxiosPrivate } from '@/hooks'
import type { User } from '@/types'

export const useUserRequest = () => {
  const privateAxios = useAxiosPrivate()

  const getUserDataRequest = (): Promise<AxiosResponse<User>> => {
    return privateAxios.get('/user')
  }

  return { getUserDataRequest }
}