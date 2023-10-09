import { languages } from '@/data'
import { useEffect } from 'react'
import i18next from 'i18next'

const useRootLayout = () => {
  useEffect(() => {
    const language = localStorage.getItem('language') as keyof typeof languages

    if (language in languages) {
      i18next.changeLanguage(language)
      localStorage.setItem('language', language)
    } else {
      i18next.changeLanguage('en')
      localStorage.setItem('language', 'en')
    }
  }, [])
}

export default useRootLayout
