import { TextInputField, Button, SuccessModal } from '@/components'
import { FormProvider } from 'react-hook-form'
import useSignUp from './useSignUp'

const SignUp = () => {
  const {
    setShowSuccessModal,
    showSuccessModal,
    userRegistering,
    submitHandler,
    handleSubmit,
    isValid,
    form,
    t,
  } = useSignUp()

  return (
    <>
      <SuccessModal
        description={t('confirmation_instructions')}
        linkActionText={t('go_to_gmail')}
        setSuccess={setShowSuccessModal}
        title={t('confirmation_sent')}
        show={showSuccessModal}
        linkAction={true}
      />

      <FormProvider {...form}>
        <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-1'>
          <TextInputField name='username' />
          <TextInputField name='email' />
          <TextInputField name='password' type='password' />
          <TextInputField name='passwordConfirmation' type='password' />

          <Button
            showLoadingIndicator={userRegistering}
            disabled={userRegistering || !isValid}
            className='mt-4 !text-base'
            title={t('sign-up')}
            type='submit'
          />
        </form>
      </FormProvider>
    </>
  )
}

export default SignUp
