import type { User, MessagePromiseResponse, NewEmailActivationResponse } from '@/types'
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

  const changeEmailRequest = (newEmail: string): MessagePromiseResponse => {
    return privateAxios.get(`/user/change-email?newEmail=${newEmail}`)
  }

  const activateEmailRequest = (
    token: string,
  ): Promise<AxiosResponse<NewEmailActivationResponse>> => {
    return privateAxios.put(`/user/activate-email?token=${token}`)
  }

  return { getUserDataRequest, updateUsernameRequest, changeEmailRequest, activateEmailRequest }
}
