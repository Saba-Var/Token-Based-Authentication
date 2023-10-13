import { TextInputField, Button, SuccessModal } from '@/components'
import { FormProvider } from 'react-hook-form'
import useNewPassword from './useNewPassword'

const NewPassword = () => {
  const {
    setShowSuccessModal,
    isPasswordChanging,
    showSuccessModal,
    submitHandler,
    handleSubmit,
    isFormValid,
    form,
    t,
  } = useNewPassword()

  return (
    <>
      <SuccessModal
        description={t('password_reset_success_instruction')}
        title={t('password_reset_success')}
        setSuccess={setShowSuccessModal}
        linkActionText={t('log_in')}
        redirectUri='/auth/log-in'
        show={showSuccessModal}
        linkAction={true}
      />

      <FormProvider {...form}>
        <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-1'>
          <TextInputField
            disabled={isPasswordChanging}
            label={t('new-password')}
            name='password'
            type='password'
          />

          <TextInputField
            disabled={isPasswordChanging}
            name='passwordConfirmation'
            type='password'
          />

          <Button
            disabled={isPasswordChanging || !isFormValid}
            showLoadingIndicator={isPasswordChanging}
            data-cy='reset-password-button'
            title={t('reset_password')}
            className='mt-4 !text-base'
            type='submit'
          />
        </form>
      </FormProvider>
    </>
  )
}

export default NewPassword
