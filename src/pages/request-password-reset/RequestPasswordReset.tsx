import { TextInputField, Button, SuccessModal } from '@/components'
import useRequestPasswordReset from './useRequestPasswordReset'
import { FormProvider } from 'react-hook-form'

const RequestPasswordReset = () => {
  const {
    setShowSuccessModal,
    showSuccessModal,
    submitHandler,
    handleSubmit,
    isFormValid,
    isLoading,
    form,
    t,
  } = useRequestPasswordReset()

  return (
    <>
      <SuccessModal
        description={t('password_success_instruction')}
        title={t('password_change_link_sent')}
        linkActionText={t('go_to_gmail')}
        setSuccess={setShowSuccessModal}
        show={showSuccessModal}
        linkAction={true}
      />

      <FormProvider {...form}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className='flex flex-col gap-2'>
            <TextInputField name='email' />
          </div>

          <Button
            data-cy='reset-password-request-button'
            disabled={isLoading || !isFormValid}
            showLoadingIndicator={isLoading}
            className='mt-2 !text-base'
            title={t('send')}
            type='submit'
            fullWidth
          />
        </form>
      </FormProvider>
    </>
  )
}

export default RequestPasswordReset
