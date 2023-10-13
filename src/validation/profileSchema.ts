import { username, email } from './validationInputs'
import * as Yup from 'yup'

export const profileSchema = Yup.object({
  ...username,
  ...email,
})
