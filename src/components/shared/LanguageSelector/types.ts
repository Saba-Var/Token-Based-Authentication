import type { Languages } from '@/types'
import { languages } from '@/data'

export type SelectedLanguageData = {
  locale: string
  image: string
  lan: string
}

export type LanguageOptionProps = {
  language: typeof languages.en | typeof languages.ka
  updateLanguageState: (_lan: Languages) => void
  selectedLanObj: SelectedLanguageData
}
