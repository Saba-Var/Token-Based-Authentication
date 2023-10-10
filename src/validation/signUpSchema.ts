import * as Yup from 'yup'

export const signUpSchema = Yup.object({
  username: Yup.string()
    .trim()
    .required('username_required')
    .min(3, 'username_min')
    .max(30, 'username_max'),

  email: Yup.string().trim().required('email_required').email('valid_email'),

  password: Yup.string().required('password_required').min(6, 'password_min'),

  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'password_match')
    .required('confirmPassword_required'),
})
