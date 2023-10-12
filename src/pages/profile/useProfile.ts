import { useQuery } from '@tanstack/react-query'
import { useUserRequest } from '@/hooks'

const useProfile = () => {
  const { getUserDataRequest } = useUserRequest()

  useQuery(['user'], getUserDataRequest)
}

export default useProfile
