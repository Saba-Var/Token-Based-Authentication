export type ButtonProps = {
  stylesType?: 'secondary-btn' | 'primary-btn' | 'soft-btn' | 'danger-btn'
  type?: 'button' | 'submit' | 'reset'
  showLoadingIndicator?: boolean
  children?: JSX.Element
  onClick?: () => void
  fullWidth?: boolean
  disabled?: boolean
  className?: string
  title?: string
}
