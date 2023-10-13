import * as Yup from 'yup'

export const email = {
  email: Yup.string().trim().required('email_required').email('valid_email'),
}
