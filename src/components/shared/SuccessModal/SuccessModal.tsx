import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'
import { useSuccessModal } from './useSuccessModal'
import { SuccessModalProps } from './types'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const SuccessModal: React.FC<SuccessModalProps> = ({
  showOnlyCloseButton = false,
  closeWithOverlay,
  linkActionText,
  clickHandler,
  redirectUri,
  description,
  linkAction,
  actionText,
  setSuccess,
  title,
  show,
}) => {
  const { cancelButtonRef, t } = useSuccessModal()

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as='div'
        onClose={closeWithOverlay ? setSuccess : () => {}}
        initialFocus={cancelButtonRef}
        className='relative z-10'
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

        <div data-cy='success-modal' className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full justify-center p-4 text-center items-center sm:p-0'>
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
                className={`relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 ${
                  showOnlyCloseButton && 'w-full sm:w-[50%]'
                }`}
              >
                <div className='absolute right-0 top-0 pr-4 pt-4'>
                  <button
                    type='button'
                    className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    onClick={() => setSuccess(false)}
                  >
                    <span className='sr-only'>Close</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>

                <div>
                  <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100'>
                    <CheckIcon className='h-6 w-6 text-emerald-600' aria-hidden='true' />
                  </div>
                  <div className='mt-3 text-center sm:mt-5'>
                    <Dialog.Title
                      className='text-lg font-medium leading-6 text-gray-900'
                      data-cy='success-modal-title'
                      as='h3'
                    >
                      {title}
                    </Dialog.Title>
                    <div className='mt-2'>
                      <p data-cy='success-modal-description' className='text-sm text-gray-500'>
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3 ${
                    showOnlyCloseButton && 'sm:!grid-cols-1'
                  }`}
                >
                  {linkAction && !showOnlyCloseButton && redirectUri && (
                    <Link
                      data-cy='success-modal-link'
                      to={redirectUri}
                      className='inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 sm:col-start-2 sm:text-sm'
                      rel='noreferrer'
                    >
                      {linkActionText}
                    </Link>
                  )}

                  {!linkAction && !showOnlyCloseButton && (
                    <button
                      className='inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 sm:col-start-2 sm:text-sm'
                      onClick={clickHandler}
                      ref={cancelButtonRef}
                    >
                      {actionText}
                    </button>
                  )}

                  <button
                    className={`mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 sm:col-start-1 sm:mt-0 sm:text-sm`}
                    onClick={() => setSuccess(false)}
                    ref={cancelButtonRef}
                  >
                    {t('close')}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SuccessModal
