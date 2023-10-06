import { useMemo, useState, useEffect } from 'react'
import type { Languages } from '@/types'
import { languages } from '@/data'
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
      return languages[key as keyof typeof languages]
    })
  }, [])

  useEffect(() => {
    const language = localStorage.getItem('language')

    if (language && language in languages) {
      updateLanguageState(language as Languages)
    } else {
      updateLanguageState('en')
    }
  }, [])

  return { selectedLanObj, setSelectedLanObj, updateLanguageState, languagesList }
}
