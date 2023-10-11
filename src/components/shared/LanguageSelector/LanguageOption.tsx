import { CheckIcon } from '@heroicons/react/20/solid'
import type { LanguageOptionProps } from './types'
import { Listbox } from '@headlessui/react'
import type { Languages } from '@/types'
import { classNames } from '@/utils'

const LanguageOption: React.FC<LanguageOptionProps> = ({
  updateLanguageState,
  selectedLanObj,
  language,
}) => {
  return (
    <Listbox.Option
      onClick={() => updateLanguageState(language.locale as Languages)}
      data-cy={`language-option-${language.locale}`}
      key={language.locale}
      className={({ active }) =>
        classNames(
          active ? 'text-white bg-blue-500' : 'text-gray-900',
          'relative cursor-pointer select-none w-full',
        )
      }
      value={language.lan}
    >
      {({ active }) => {
        return (
          <>
            <div className='flex items-center py-2 pl-3 pr-9'>
              <div className='h-6 w-6  flex-shrink-0 rounded-full'>
                <img
                  className='w-full h-full rounded-full'
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
  )
}

export default LanguageOption
