import { username } from './validationInputs'
import * as Yup from 'yup'

export const usernameSchema = Yup.object(username)
