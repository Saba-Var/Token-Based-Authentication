import { axiosConfig } from '@/config'
import axios from 'axios'

export const publicAxiosInstance = axios.create(axiosConfig)

export const privateAxiosInstance = axios.create(axiosConfig)
