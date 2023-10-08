import type { Dispatch, SetStateAction } from 'react'

export type SetState<T> = Dispatch<SetStateAction<T>>

export type AuthPageRoute = 'sign-up' | 'sign-in'

export type Languages = 'en' | 'ka'

export type AuthQuestionProps = {
  questionText: string
  redirectUrl: string
  linkText: string
}

export type ResponseMessage = {
  message: string
}

export type SignUpFormValues = {
  passwordConfirmation: string
  password: string
  username: string
  email: string
}
