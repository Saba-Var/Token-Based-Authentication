import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const useHome = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return { navigate, t }
}

export default useHome
