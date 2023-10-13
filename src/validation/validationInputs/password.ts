import * as Yup from 'yup'

export const password = {
  password: Yup.string().required('password_required').min(6, 'password_min'),
}
