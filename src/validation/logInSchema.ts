import { email } from './validationInputs'
import * as Yup from 'yup'

export const logInSchema = Yup.object({
  password: Yup.string().required('password_required'),
  rememberMe: Yup.boolean(),
  ...email,
})
