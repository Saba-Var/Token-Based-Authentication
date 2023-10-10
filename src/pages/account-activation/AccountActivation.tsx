import useActivationRequest from './useAccountActivation'
import { LoadingIcon } from '@/components'
import { Link } from 'react-router-dom'

const AccountActivation = () => {
  const { isLoading, activationResultToShow, t } = useActivationRequest()

  return (
    <div className='h-screen bg-white w-full flex justify-center'>
      {!isLoading && activationResultToShow?.image ? (
        <div className='flex items-center justify-center flex-col gap-5'>
          <div>
            <img
              className='h-[50vh] w-full'
              src={activationResultToShow.image}
              alt='activation result'
            />
          </div>
          <h2 className='text-xl sm:text-3xl px-2 text-center'>{activationResultToShow.text}</h2>

          <Link replace to={activationResultToShow.redirect} className='primary-btn'>
            {activationResultToShow.redirect === '/' ? t('go_back_home') : t('log_in')}
          </Link>
        </div>
      ) : (
        <LoadingIcon centered />
      )}
    </div>
  )
}

export default AccountActivation
