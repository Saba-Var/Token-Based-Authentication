import { CheckboxInputField, TextInputField, Button } from '@/components'
import { FormProvider } from 'react-hook-form'
import { Link } from 'react-router-dom'
import useLogin from './useLogIn'

const LogIn = () => {
  const { authorizing, form, handleSubmit, submitHandler, t } = useLogin()

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className='flex flex-col gap-2'>
          <TextInputField name='email' />
          <TextInputField name='password' type='password' />
        </div>

        <div className='flex mb-4 mt-4 items-center justify-between'>
          <CheckboxInputField text={t('remember_me')} name='rememberMe' />
          <Link
            className='font-medium text-sm lg:text-base cursor-pointer text-blue-600 hover:underline hover:text-blue-700'
            to='/auth/password-reset-request'
          >
            {t('forget_password')} ?
          </Link>
        </div>

        <Button
          className='mt-6 !text-base'
          disabled={authorizing}
          showLoadingIndicator
          title={t('log_in')}
          type='submit'
          fullWidth
        />
      </form>
    </FormProvider>
  )
}

export default LogIn
