import type { ResponseMessage, SignUpFormValues } from '@/types'
import { publicAxiosInstance as publicAxios } from '@/services'
import type { AxiosResponse } from 'axios'

export const registerUserRequest = (
  data: SignUpFormValues,
): Promise<AxiosResponse<ResponseMessage>> => {
  return publicAxios.post('/auth/sign-up', data)
}

export const accountActivationRequest = (
  token: string,
): Promise<AxiosResponse<ResponseMessage>> => {
  return publicAxios.post(`/auth/account-activation?token=${token}`)
}
