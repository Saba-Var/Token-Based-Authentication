import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div className='w-full h-screen'>
      <main className='grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <p className='text-3xl font-semibold text-indigo-600'>404</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            {t('page_not_found')}
          </h1>
          <p className='mt-6 text-base leading-7 text-gray-600'>
            {t('page_not_found_description')}
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link to='/' className='primary-btn'>
              {t('go_back_home')}
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NotFound
