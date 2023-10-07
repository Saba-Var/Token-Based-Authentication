import { useNavigate } from 'react-router-dom'

const AuthPageWrapper = () => {
  const navigate = useNavigate()

  const navigateToHome = () => {
    navigate('/')
  }

  return { navigateToHome }
}

export default AuthPageWrapper
