import { useTranslation } from 'react-i18next'
import { useRef } from 'react'

export const useSuccessModal = () => {
  const { t } = useTranslation()

  const cancelButtonRef = useRef(null)

  return { t, cancelButtonRef }
}
