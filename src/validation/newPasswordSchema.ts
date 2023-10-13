import { password, passwordConfirmation } from './validationInputs'
import * as Yup from 'yup'

export const newPasswordSchema = Yup.object({
  ...passwordConfirmation,
  ...password,
})
