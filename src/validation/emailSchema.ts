import * as Yup from 'yup'

export const emailSchema = Yup.object({
  email: Yup.string().trim().required('email_required').email('valid_email'),
})
