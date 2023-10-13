import * as Yup from 'yup'

export const username = {
  username: Yup.string()
    .trim()
    .required('username_required')
    .min(3, 'username_min')
    .max(30, 'username_max'),
}
