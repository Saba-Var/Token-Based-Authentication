import type { Dispatch, SetStateAction } from 'react'

export type SetState<T> = Dispatch<SetStateAction<T>>

export type AuthPageRoute = 'sign-up' | 'log-in'

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
  rememberMe: boolean
}

export interface SignUpFormValues extends BaseAuthFormValues {
  passwordConfirmation: string
  username: string
}

export type AuthTokens = {
  accessToken: string
  refreshToken: string
}
