import { axiosConfig } from '@/config'
import { emitToast } from '@/utils'
import axios from 'axios'

export const publicAxiosInstance = axios.create(axiosConfig)

publicAxiosInstance.interceptors.response.use(
  async (response) => response,

  async (error) => {
    if (error?.response?.status === 500) {
      emitToast(error?.response?.data?.message || 'Something went wrong', 'error')
    }
    return Promise.reject(error)
  },
)

export const privateAxiosInstance = axios.create(axiosConfig)
