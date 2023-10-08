import { XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'
import { useTranslation } from 'react-i18next'
import { ModalWrapperProps } from './types'
import { Fragment, useRef } from 'react'

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  childrenContainerClassName,
  closeHandler = () => {},
  mainContainerClassName,
  disabled = false,
  submitHandler,
  submitText,
  children,
  title,
  open,
  type,
}) => {
  const cancelButtonRef = useRef(null)
  const { t } = useTranslation()

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        initialFocus={cancelButtonRef}
        onClose={closeHandler}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full justify-center text-center items-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel
                className={`relative w-screen min-h-screen 3xl:py-10 md:min-h-fit md:w-[85vw] lg:w-[75vw] xl:w-[50vw] 3xl:w-[50vw] transform rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all md:my-8 sm:w-full sm:p-6 ${mainContainerClassName}`}
              >
                <div className='absolute right-0 top-0 pr-4 pt-4'>
                  <button
                    type='button'
                    className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    onClick={closeHandler}
                  >
                    <span className='sr-only'>Close</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>

                <div className='flex flex-col justify-between'>
                  <div>
                    <div className='text-center'>
                      <Dialog.Title
                        as='h3'
                        className='text-xl font-semibold leading-6 text-gray-900'
                      >
                        {title}
                      </Dialog.Title>
                      <div className={`mt-6 ${childrenContainerClassName}`}>{children}</div>
                    </div>
                  </div>

                  <div className='mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3'>
                    <button
                      type='button'
                      className={`inline-flex h-12 items-center w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2 ${
                        type === 'danger' && 'bg-red-600 text-gray-900 hover:bg-red-500'
                      } ${disabled && 'disabled-btn'}`}
                      onClick={submitHandler}
                      disabled={disabled}
                    >
                      {submitText ? submitText : t('save')}
                    </button>

                    <button
                      type='button'
                      className='mt-3 outline-none h-12 items-center inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0'
                      onClick={closeHandler}
                      ref={cancelButtonRef}
                    >
                      {t('cancel')}
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ModalWrapper
