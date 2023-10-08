import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { AuthQuestion, LanguageSelector } from '@/components'
import { Popover, Transition } from '@headlessui/react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'

const Navbar = () => {
  const { t } = useTranslation()

  return (
    <Popover className='relative bg-white shadow'>
      <div className='mx-auto w-screen shadow-md px-4 sm:px-6 fixed bg-white z-[99] top-0 left-0'>
        <div className='flex items-center justify-between py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <p className='text-4xl cursor-pointer items-center flex font-bold tracking-tight text-gray-900'>
              Auth
              <span>🔒</span>
            </p>
          </div>

          <div className='w-full flex items-center justify-end'>
            <LanguageSelector />

            <div className='-my-2 -mr-2 md:hidden'>
              <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>

            <div className='hidden md:block'>
              <Link
                to='/auth/sign-in'
                className='ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
              >
                {t('log_in')}
              </Link>

              <Link
                to='/auth/sign-up'
                className='ml-6 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700'
              >
                {t('sign_up')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Transition
        leaveFrom='opacity-100 scale-100'
        enterTo='opacity-100 scale-100'
        enterFrom='opacity-0 scale-95'
        enter='duration-200 ease-out'
        leaveTo='opacity-0 scale-95'
        leave='duration-100 ease-in'
        as={Fragment}
      >
        <Popover.Panel
          focus
          className='fixed inset-x-0 top-0 z-[999] origin-top-right transform p-2 transition md:hidden'
        >
          <div className='divide-y-2 z-[99] divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
            <div className='px-5 pt-5 pb-6'>
              <div className='flex items-center justify-between'>
                <div className='flex justify-start lg:w-0 lg:flex-1'>
                  <p className='text-4xl cursor-pointer font-bold tracking-tight text-gray-900'>
                    Auth
                    <span>🔒</span>
                  </p>
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className='space-y-6 py-6 px-5'>
              <div>
                <Link
                  to='/auth/log-in'
                  className='flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700'
                >
                  {t('log_in')}
                </Link>

                <AuthQuestion
                  questionText='dont_have_an_account'
                  redirectUrl='/auth/sign-up'
                  linkText='sign_up'
                />
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Navbar
