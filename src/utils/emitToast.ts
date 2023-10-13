import { toast } from 'react-toastify'

export const emitToast = (message: string, type: 'success' | 'error' = 'success') => {
  return toast[type](message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    pauseOnHover: false,
  })
}
