import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import useAuthPageWrapper from './useAuthPageWrapper'
import { AuthQuestion } from '@/components'
import { AuthWrapperProps } from './types'

const AuthPageWrapper: React.FC<AuthWrapperProps> = ({ children, page, title }) => {
  const { navigateToHome } = useAuthPageWrapper()

  return (
    <>
      <div
        className={`flex h-screen bg-gray-200 relative overflow-y-auto w-full flex-col ${
          page !== 'sign-up' && 'justify-center'
        } justify-center pt-4 sm:pt-12 pb-8 px-4 sm:px-6 lg:px-8`}
      >
        <ArrowLeftIcon
          className='absolute cursor-pointer w-7 h-7 lg:w-10 lg:h-10 top-4 opacity-70'
          onClick={navigateToHome}
        />

        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <h2
            className={`text-center text-2xl lg:text-3xl font-bold tracking-tight text-gray-800 ${
              page === 'sign-up' && 'mt-12 sm:mt-0'
            }`}
          >
            {title}
          </h2>
        </div>

        <div className='mt-6 3xl:mt-12 sm:mx-auto sm:w-[450px] 2xl:w-[500px]'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-8'>{children}</div>

          {page !== 'reset-password' && <AuthQuestion linkText='' questionText='' redirectUrl='' />}
        </div>
      </div>
    </>
  )
}

export default AuthPageWrapper
