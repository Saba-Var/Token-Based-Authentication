import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const useHero = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return { t, navigate }
}

export default useHero
