import type { Dispatch, SetStateAction } from 'react'
import type { AxiosResponse } from 'axios'

export type SetState<T> = Dispatch<SetStateAction<T>>

export type MessagePromiseResponse = Promise<AxiosResponse<ResponseMessage>>

export type AuthPageRoute = 'sign-up' | 'log-in' | 'request-password-reset' | 'new-password'

export type Languages = 'en' | 'ka'

export type AuthQuestionProps = {
  questionText: string
  redirectUrl: string
  linkText: string
}

export type ResponseMessage = {
  message: string
}

export type BaseAuthFormValues = {
  email: string
  password: string
}

export interface LogInFormValues extends BaseAuthFormValues {
  rememberMe?: boolean
}

export interface SignUpFormValues extends BaseAuthFormValues {
  passwordConfirmation: string
  username: string
}

export type AuthTokens = {
  accessToken: string
  refreshToken: string
}

export type NewPasswordFormValues = {
  password: string
  passwordConfirmation: string
}

export type User = {
  _id: string
  username: string
  email: string
  image: string
}
