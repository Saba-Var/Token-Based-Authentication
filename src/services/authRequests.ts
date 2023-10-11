import { publicAxiosInstance as publicAxios } from '@/services'
import type { AxiosResponse } from 'axios'
import type {
  MessagePromiseResponse,
  NewPasswordFormValues,
  SignUpFormValues,
  LogInFormValues,
  AuthTokens,
} from '@/types'

export const registerUserRequest = (data: SignUpFormValues): MessagePromiseResponse => {
  return publicAxios.post('/auth/sign-up', data)
}

export const accountActivationRequest = (token: string): MessagePromiseResponse => {
  return publicAxios.post(`/auth/account-activation?token=${token}`)
}

export const logInRequest = (data: LogInFormValues): Promise<AxiosResponse<AuthTokens>> => {
  return publicAxios.post('/auth/sign-in', data)
}

export const passwordResetEmailRequest = (email: string): MessagePromiseResponse => {
  return publicAxios.get(`/auth/change-password-email?email=${email}`)
}

export const changePasswordRequest = (data: { email: string }): MessagePromiseResponse => {
  return publicAxios.put('/auth/change-password', data)
}

export const newPasswordRequest = (
  data: NewPasswordFormValues & { token: string },
): MessagePromiseResponse => {
  return publicAxios.put(`/auth/change-password?token=${data.token}`, data)
}
