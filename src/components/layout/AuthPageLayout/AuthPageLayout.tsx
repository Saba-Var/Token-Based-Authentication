import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import useAuthPageLayout from './useAuthPageLayout'
import { AuthQuestion } from '@/components'
import { Outlet } from 'react-router-dom'

const AuthPageWrapper = () => {
  const { navigateToHome, childRouteName, t, authQuestionPropsData } = useAuthPageLayout()

  return (
    <>
      <div
        className={`flex h-screen bg-gray-200 relative overflow-y-auto w-full flex-col ${
          childRouteName !== 'sign-up' && 'justify-center'
        } justify-center pt-4 sm:pt-12 pb-8 px-4 sm:px-6 lg:px-8`}
      >
        <ArrowLeftIcon
          className='absolute cursor-pointer w-7 h-7 lg:w-10 lg:h-10 top-4 opacity-70'
          onClick={navigateToHome}
        />

        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <h2
            className={`text-center text-2xl lg:text-3xl font-bold tracking-tight text-gray-800 ${
              childRouteName === 'sign-up' && 'mt-12 sm:mt-0'
            }`}
          >
            {t(childRouteName)}
          </h2>
        </div>

        <div className='mt-6 3xl:mt-12 sm:mx-auto sm:w-[450px] 2xl:w-[500px]'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-8'>
            <Outlet />
          </div>

          {(childRouteName === 'sign-in' || childRouteName === 'sign-up') && (
            <AuthQuestion {...authQuestionPropsData} />
          )}
        </div>
      </div>
    </>
  )
}

export default AuthPageWrapper
