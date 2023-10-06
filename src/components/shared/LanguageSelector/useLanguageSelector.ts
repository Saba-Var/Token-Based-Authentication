import { useEffect, useMemo, useState } from 'react'
import type { Languages } from '@/types'
import { languages } from '@/constants'
import i18next from 'i18next'

export const useLanguageSelector = () => {
  const [selectedLanObj, setSelectedLanObj] = useState(
    languages[(i18next.language || 'en') as keyof typeof languages],
  )

  const updateLanguageState = (lan: Languages) => {
    i18next.changeLanguage(lan)
    setSelectedLanObj(languages[lan as keyof typeof languages])
    localStorage.setItem('language', lan)
  }

  const languagesList = useMemo(() => {
    return Object.keys(languages).map((key) => {
      const languageKey = key as keyof typeof languages
      return {
        lan: languages[languageKey].lan,
        image: languages[languageKey].image,
        locale: languages[languageKey].locale,
      }
    })
  }, [])

  useEffect(() => {
    const language = localStorage.getItem('language') || 'en'
    updateLanguageState(language as Languages)
  }, [])

  return { selectedLanObj, setSelectedLanObj, updateLanguageState, languagesList }
}
