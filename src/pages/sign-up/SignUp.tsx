import { TextInputField, Button } from '@/components'
import { FormProvider } from 'react-hook-form'
import useSignUp from './useSignUp'

const SignUp = () => {
  const { form, handleSubmit, submitHandler, t, userRegistering } = useSignUp()

  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-1'>
          <TextInputField name='username' />
          <TextInputField name='email' />
          <TextInputField name='password' type='password' />
          <TextInputField name='confirmPassword' type='password' />

          <Button
            showLoadingIndicator={userRegistering}
            disabled={userRegistering}
            title={t('sign-up')}
            className='mt-4'
            type='submit'
          />
        </form>
      </FormProvider>
    </>
  )
}

export default SignUp
