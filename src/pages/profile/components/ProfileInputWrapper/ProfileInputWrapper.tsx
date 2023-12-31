import { ProfileInputWrapperProps } from './types'
import { useTranslation } from 'react-i18next'

const ProfileInputWrapper: React.FC<ProfileInputWrapperProps> = ({
  showEditButton = true,
  onClick = () => {},
  cySelectorName,
  children,
}) => {
  const { t } = useTranslation()

  return (
    <div className='flex w-full gap-4 justify-between items-center text-gray-800 hover:text-gray-600 transition-all'>
      {children}

      <div className='w-20 hover:scale-105 ease-anm !duration-100 text-center'>
        {showEditButton && (
          <button data-cy={`${cySelectorName}-change-btn`} onClick={onClick} type='button'>
            {t('change')}
          </button>
        )}
      </div>
    </div>
  )
}

export default ProfileInputWrapper
