import type { ResponseMessage, SignUpFormValues } from '@/types'
import { publicAxiosInstance as publicAxios } from '@/services'
import type { AxiosResponse } from 'axios'

export const registerUSer = (data: SignUpFormValues): Promise<AxiosResponse<ResponseMessage>> => {
  return publicAxios.post('/auth/sign-up', data)
}
