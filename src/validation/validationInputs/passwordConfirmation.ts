import * as Yup from 'yup'

export const passwordConfirmation = {
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'password_match')
    .required('confirmPassword_required'),
}
