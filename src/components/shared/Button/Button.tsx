import { LoadingIcon } from '@/components'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({
  showLoadingIndicator = false,
  stylesType = 'primary-btn',
  onClick = () => {},
  fullWidth = false,
  disabled = false,
  type = 'button',
  className = '',
  title = '',
  children,
  ...props
}) => {
  return (
    <button
      className={`h-12.5 flex items-center justify-center transition-all ${className} ${stylesType} ${
        disabled ? 'disabled-btn' : ''
      } ${fullWidth ? '!w-full' : ''}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {title && <p>{title}</p>}

      {children}

      {showLoadingIndicator && (
        <span className='w-5 h-5'>
          <LoadingIcon styles='h-5 w-5' />
        </span>
      )}
    </button>
  )
}

export default Button
