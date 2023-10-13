import { email } from './validationInputs'
import * as Yup from 'yup'

export const emailSchema = Yup.object(email)
