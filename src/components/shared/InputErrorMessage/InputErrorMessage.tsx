import { InputErrorMessageProps } from './types'
import { useTranslation } from 'react-i18next'

const InputErrorMessage: React.FC<InputErrorMessageProps> = ({ errorMessage }) => {
  const { t } = useTranslation('inputs')

  return <p className='lg:mt-1 text-left text-sm text-red-600'>{t(errorMessage)}</p>
}

export default InputErrorMessage
