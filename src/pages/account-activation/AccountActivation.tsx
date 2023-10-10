import useActivationRequest from './useAccountActivation'
import { LoadingIcon } from '@/components'
import { Link } from 'react-router-dom'

const AccountActivation = () => {
  const { isLoading, activationResultToShow, t } = useActivationRequest()

  return (
    <div className='h-screen bg-white w-full flex justify-center'>
      {!isLoading ? (
        <div className='flex items-center justify-center flex-col gap-5'>
          <div>
            <img
              data-cy={activationResultToShow.imgAlt}
              alt={activationResultToShow.imgAlt}
              src={activationResultToShow.image}
              className='h-[50vh] w-full'
            />
          </div>

          <h2 data-cy='text-result' className='text-xl sm:text-3xl px-2 text-center'>
            {activationResultToShow.text}
          </h2>

          <Link
            to={activationResultToShow.redirect}
            data-cy='activation-action-link'
            className='primary-btn'
            replace
          >
            {activationResultToShow.redirect === '/' ? t('go_back_home') : t('log_in')}
          </Link>
        </div>
      ) : (
        <LoadingIcon data-cy='loading-icon' centered />
      )}
    </div>
  )
}

export default AccountActivation
