import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useLanguageSelector } from './useLanguageSelector'
import { Listbox, Transition } from '@headlessui/react'
import { classNames } from '@/utils'
import { Fragment } from 'react'

const LanguageSelector = () => {
  const { updateLanguageState, selectedLanObj, languagesList } = useLanguageSelector()

  return (
    <Listbox>
      {({ open }) => (
        <>
          <div className='relative'>
            <Listbox.Button className='relative md:w-[165px] cursor-pointer rounded-md sm:border sm:border-gray-100 bg-white py-2 pl-3 pr-10 text-left sm:shadow-sm  sm:text-sm'>
              <div className='flex items-center'>
                <div className='relative bg-red-900 h-6 w-6 rounded-full'>
                  <img
                    src={selectedLanObj.image}
                    className='w-full h-full rounded-full'
                    alt='selected language'
                  />
                </div>

                <span className='hidden ml-3 md:block'>{selectedLanObj.lan}</span>

                <span className='md:hidden ml-3 block'>
                  {selectedLanObj.locale === 'en' ? 'Eng' : 'ქარ'}
                </span>
              </div>

              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-2'>
                <ChevronDownIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
              </span>
            </Listbox.Button>

            <Transition
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
              as={Fragment}
              show={open}
            >
              <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {languagesList.map((language) => (
                  <button key={language.lan} rel='preload'>
                    <Listbox.Option
                      onClick={() => updateLanguageState(language.locale)}
                      className={({ active }) =>
                        classNames(
                          active ? 'text-white bg-blue-500' : 'text-gray-900',
                          'relative cursor-pointer select-none',
                        )
                      }
                      value={language.lan}
                    >
                      {({ active }) => {
                        return (
                          <>
                            <div className='flex items-center py-2 pl-3 pr-9'>
                              <div className='relative h-6 w-6 flex-shrink-0 rounded-full'>
                                <img
                                  className='rounded-full'
                                  alt={`${language.lan} flag`}
                                  src={language.image}
                                />
                              </div>

                              <span className='ml-3 hidden md:block truncate'>{language.lan}</span>

                              <span className='ml-3 block md:hidden truncate'>
                                {language.locale === 'en' ? 'Eng' : 'ქარ'}
                              </span>
                            </div>

                            {selectedLanObj.locale === language.locale ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-blue-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4',
                                )}
                              >
                                <CheckIcon className='h-5 w-5 fill-green-500' aria-hidden='true' />
                              </span>
                            ) : null}
                          </>
                        )
                      }}
                    </Listbox.Option>
                  </button>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

export default LanguageSelector
