import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import i18next from 'i18next'

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ka'],
    fallbackLng: 'en',
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  })
