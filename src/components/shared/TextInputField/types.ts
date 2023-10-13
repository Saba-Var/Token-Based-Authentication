export type UseTextInputParams = {
  type?: 'text' | 'password'
  showValidation?: boolean
  name: string
}

export interface InputFieldProps extends UseTextInputParams {
  autoComplete?: 'off' | 'on' | 'new-password'
  labelClasses?: string
  showEyeIcon?: boolean
  defaultValue?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  label?: string
}
