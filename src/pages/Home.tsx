import { GridBackground, Button } from '@/components'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { tokenAuthFlow } from '@/assets'

const Home = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className='relative pt-14 lg:flex items-center isolate overflow-hidden bg-white min-h-screen'>
      <GridBackground />

      <div className='mx-auto flex-col lg:flex-row flex lg:justify-center px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-20 2xl:pb-40 2xl:pt-40'>
        <div className='mx-auto flex flex-col justify-center max-w-4xl lg:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl lg:mx-0 lg:flex-shrink-0'>
          <h1 className='mt-10 !leading-tight lg:mt-0 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            {t('token_based')} <span className='text-indigo-800'>{t('authentication')}</span>
          </h1>

          <p className='mt-6 text-lg leading-8 text-gray-600 lg:max-w-xl '>
            {t('hero_token_description')}
          </p>

          <div className='mt-10 flex items-center gap-x-6'>
            <Button
              onClick={() => navigate('/auth/sign-up')}
              title={t('get_started')}
              stylesType='primary-btn'
            />

            <Link
              to='https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/'
              className='text-sm font-semibold leading-6 text-gray-900'
              target='_blank'
            >
              {t('learn_more')} <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>

        <div className='mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32'>
          <div className='w-full flex-none'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <img
                className='w-full lg:w-[40vw] rounded-md shadow-2xl ring-1 ring-gray-900/10'
                alt='authentication flow'
                src={tokenAuthFlow}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
