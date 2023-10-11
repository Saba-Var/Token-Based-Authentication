import type { Languages } from '@/types'
import { languages } from '@/data'

export type selectedLanguageData = {
  image: string
  lan: string
  locale: string
}

export type LanguageOptionProps = {
  language: typeof languages.en | typeof languages.ka
  updateLanguageState: (_lan: Languages) => void
  selectedLanObj: selectedLanguageData
}
