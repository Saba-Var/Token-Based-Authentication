import { CheckboxInputField, TextInputField, Button } from '@/components'
import { FormProvider } from 'react-hook-form'
import { Form, Link } from 'react-router-dom'
import useLogin from './useLogIn'

const LogIn = () => {
  const { authorizing, form, handleSubmit, submitHandler, t, isValid } = useLogin()

  return (
    <FormProvider {...form}>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <div className='flex flex-col gap-2'>
          <TextInputField disabled={authorizing} name='email' />
          <TextInputField disabled={authorizing} name='password' type='password' />
        </div>

        <div className='flex mb-4 mt-4 items-center justify-between'>
          <CheckboxInputField disabled={authorizing} text={t('remember_me')} name='rememberMe' />
          <Link
            className='font-medium text-sm lg:text-base cursor-pointer text-blue-600 hover:underline hover:text-blue-700'
            to='/auth/request-password-reset'
            data-cy='forget-password-link'
          >
            {t('forget_password')} ?
          </Link>
        </div>

        <Button
          disabled={authorizing || !isValid}
          showLoadingIndicator={authorizing}
          className='mt-6 !text-base'
          data-cy='log-in-button'
          title={t('log_in')}
          type='submit'
          fullWidth
        />
      </Form>
    </FormProvider>
  )
}

export default LogIn
