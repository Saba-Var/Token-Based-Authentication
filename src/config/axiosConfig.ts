export const axiosConfig = {
  baseURL: import.meta.env.VITE_BACKEND_API_BASE_URI,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}
