import { AuthQuestion, LanguageSelector } from '@/components'
import { HomeIcon } from '@heroicons/react/24/outline'
import useAuthPageLayout from './useAuthPageLayout'
import { Outlet } from 'react-router-dom'

const AuthPageWrapper = () => {
  const { navigateToHome, childRouteName, t, authQuestionPropsData } = useAuthPageLayout()

  return (
    <>
      <div
        className={`flex h-screen bg-gray-200 relative overflow-y-auto w-full flex-col ${
          childRouteName !== 'sign-up' && 'justify-center'
        } justify-center py-12 px-4 sm:px-6 lg:px-8`}
      >
        <div className='fixed hidden top-4 sm:flex gap-3'>
          <HomeIcon
            data-cy='home-icon'
            className='cursor-pointer w-7 h-7 lg:w-10 lg:h-10 opacity-70'
            onClick={navigateToHome}
          />
        </div>

        <div className='mt-6 lg:mt-10 3xl:mt-12 sm:mx-auto sm:w-[450px] 2xl:w-[500px]'>
          <div className='bg-white py-6 px-4 shadow sm:rounded-lg sm:px-8'>
            <div className='flex justify-end mb-8'>
              <LanguageSelector />
            </div>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
              <h2
                className={`text-center mb-6 text-2xl lg:text-3xl font-bold tracking-tight text-gray-800`}
                data-cy='auth-page-title'
              >
                {t(childRouteName === 'request-password-reset' ? 'reset_password' : childRouteName)}
              </h2>
            </div>

            {childRouteName === 'request-password-reset' && (
              <p data-cy='auth-form-description' className='mb-6 text-center'>
                {t('password_reset_instruction')}
              </p>
            )}

            <Outlet />
          </div>

          {authQuestionPropsData?.questionText && <AuthQuestion {...authQuestionPropsData} />}
        </div>
      </div>
    </>
  )
}

export default AuthPageWrapper
