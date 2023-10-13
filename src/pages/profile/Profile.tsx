import { ProfileInputWrapper, ProfileInputField } from './components'
import { LoadingIcon, Button } from '@/components'
import { FormProvider } from 'react-hook-form'
import { Form } from 'react-router-dom'
import useProfile from './useProfile'

const Profile = () => {
  const {
    disabledInputFieldsHandler,
    setIsUserImageLoading,
    disabledInputFields,
    isUserImageLoading,
    isUserDataUpdating,
    isUsernameValid,
    cancelHandler,
    submitHandler,
    handleSubmit,
    user,
    form,
    t,
  } = useProfile()

  return (
    <>
      {user.username ? (
        <div className='mt-36 md:mt-44 bg-slate-200 p-4 md:p-12 rounded-lg max-w-2xl xl:max-w-3xl mx-auto'>
          <div className='flex justify-center'>
            <img
              className={`${
                isUserImageLoading ? 'bg-slate-200 blur-2xl' : ''
              } h-48 w-48 select-none ease-anm`}
              onLoad={() => setIsUserImageLoading(false)}
              alt={user.username}
              src={user.image}
            />
          </div>

          <FormProvider {...form}>
            <Form onSubmit={handleSubmit(submitHandler)} className='mt-8'>
              <ProfileInputField
                disabled={disabledInputFields.username || isUserDataUpdating}
                onClick={() => disabledInputFieldsHandler('username')}
                name='username'
              />

              <ProfileInputField
                onClick={() => disabledInputFieldsHandler('email')}
                disabled={disabledInputFields.email}
                defaultValue={user.email}
                name='email'
              />

              {(!disabledInputFields.email || !disabledInputFields.username) && (
                <ProfileInputWrapper showEditButton={false}>
                  <div className='grid grid-cols-2 gap-4 items-center justify-items-center mt-6 w-full ml-auto'>
                    <Button
                      disabled={isUserDataUpdating}
                      stylesType='secondary-btn'
                      onClick={cancelHandler}
                      title={t('cancel')}
                      className='h-12'
                      fullWidth
                    />

                    <Button
                      disabled={isUserDataUpdating || !isUsernameValid}
                      showLoadingIndicator={isUserDataUpdating}
                      title={t('save')}
                      className='h-12'
                      type='submit'
                      fullWidth
                    />
                  </div>
                </ProfileInputWrapper>
              )}
            </Form>
          </FormProvider>
        </div>
      ) : (
        <LoadingIcon centered />
      )}
    </>
  )
}

export default Profile
