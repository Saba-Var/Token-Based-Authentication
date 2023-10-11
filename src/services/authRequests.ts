import type { ResponseMessage, SignUpFormValues, LogInFormValues, AuthTokens } from '@/types'
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

export const logInRequest = (data: LogInFormValues): Promise<AxiosResponse<AuthTokens>> => {
  return publicAxios.post('/auth/sign-in', data)
}

export const passwordResetEmailRequest = (
  email: string,
): Promise<AxiosResponse<ResponseMessage>> => {
  return publicAxios.get(`/auth/change-password-email?email=${email}`)
}

export const changePasswordRequest = (data: {
  email: string
}): Promise<AxiosResponse<AuthTokens>> => {
  return publicAxios.put('/auth/change-password', data)
}
