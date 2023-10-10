import * as Yup from 'yup'

export const logInSchema = Yup.object({
  email: Yup.string().trim().required('email_required').email('valid_email'),

  password: Yup.string().required('password_required'),

  rememberMe: Yup.boolean(),
})
