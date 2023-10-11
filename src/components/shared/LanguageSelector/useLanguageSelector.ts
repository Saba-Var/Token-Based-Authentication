import { useMemo, useState } from 'react'
import type { Languages } from '@/types'
import { languages } from '@/data'
import i18next from 'i18next'

export const useLanguageSelector = () => {
  const [selectedLanObj, setSelectedLanObj] = useState(
    languages[localStorage.getItem('language') as Languages],
  )

  const updateLanguageState = (lan: Languages) => {
    i18next.changeLanguage(lan)
    setSelectedLanObj(languages[lan])
    localStorage.setItem('language', lan)
  }

  const languagesList = useMemo(() => {
    return Object.keys(languages).map((key) => {
      return languages[key as Languages]
    })
  }, [])

  return { selectedLanObj, setSelectedLanObj, updateLanguageState, languagesList }
}
