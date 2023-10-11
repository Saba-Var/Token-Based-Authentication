import useRequestPasswordReset from './useRequestPasswordReset'
import { TextInputField, Button } from '@/components'
import { FormProvider } from 'react-hook-form'

const RequestPasswordReset = () => {
  const { form, handleSubmit, isLoading, submitHandler, t, isFormValid } = useRequestPasswordReset()

  return (
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
          title={t('log_in')}
          type='submit'
          fullWidth
        />
      </form>
    </FormProvider>
  )
}

export default RequestPasswordReset
