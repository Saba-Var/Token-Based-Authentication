import { email, username, password, passwordConfirmation } from './validationInputs'
import * as Yup from 'yup'

export const signUpSchema = Yup.object({
  ...passwordConfirmation,
  ...username,
  ...password,
  ...email,
})
