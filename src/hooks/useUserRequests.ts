import type { User, MessagePromiseResponse } from '@/types'
import type { AxiosResponse } from 'axios'
import { useAxiosPrivate } from '@/hooks'

export const useUserRequests = () => {
  const privateAxios = useAxiosPrivate()

  const getUserDataRequest = (): Promise<AxiosResponse<User>> => {
    return privateAxios.get('/user')
  }

  const updateUsernameRequest = (username: string): MessagePromiseResponse => {
    return privateAxios.patch('/user', { username })
  }

  return { getUserDataRequest, updateUsernameRequest }
}
