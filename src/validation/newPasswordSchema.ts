import * as Yup from 'yup'

export const newPasswordSchema = Yup.object({
  password: Yup.string().required('password_required').min(6, 'password_min'),

  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'password_match')
    .required('confirmPassword_required'),
})
