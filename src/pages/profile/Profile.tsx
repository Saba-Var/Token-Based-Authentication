import { ProfileInputWrapper, ProfileInputField } from './components'
import { LoadingIcon, Button, SuccessModal } from '@/components'
import { FormProvider } from 'react-hook-form'
import useProfile from './useProfile'

const Profile = () => {
  const {
    setShowEmailConfirmationSentModal,
    showEmailConfirmationSentModal,
    disabledInputFieldsHandler,
    setIsUserImageLoading,
    disabledInputFields,
    isUserImageLoading,
    isUserDataUpdating,
    disableFormButtons,
    cancelHandler,
    submitHandler,
    handleSubmit,
    user,
    form,
    t,
  } = useProfile()

  return (
    <>
      <SuccessModal
        description={t('email_confirmation_sent_description')}
        setSuccess={setShowEmailConfirmationSentModal}
        show={showEmailConfirmationSentModal}
        title={t('email_confirmation_sent')}
        linkActionText={t('go_to_gmail')}
        redirectUri='https://gmail.com'
        linkAction={true}
      />

      {user.username ? (
        <div className='mt-36 md:mt-44 lg:mb-14 3xl:mb-0 3xl:mt-52 bg-slate-200 p-4 md:p-12 rounded-lg max-w-2xl xl:max-w-3xl mx-auto'>
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
            <form onSubmit={handleSubmit(submitHandler)} className='mt-8'>
              <ProfileInputField
                onClick={() => disabledInputFieldsHandler({ disabled: false, name: 'username' })}
                showEditButton={disabledInputFields.username}
                disabled={disabledInputFields.username}
                name='username'
              />

              <ProfileInputField
                onClick={() => disabledInputFieldsHandler({ disabled: false, name: 'email' })}
                showEditButton={disabledInputFields.email}
                defaultValue={user.email}
                label={t('email')}
                name='dummyEmail'
                disabled={true}
              />

              {!disabledInputFields.email && (
                <ProfileInputField
                  disabled={disabledInputFields.email}
                  label={t('new_email')}
                  showEditButton={false}
                  name='email'
                />
              )}

              {(!disabledInputFields.email || !disabledInputFields.username) && (
                <ProfileInputWrapper showEditButton={false}>
                  <div className='grid grid-cols-2 gap-4 items-center justify-items-center mt-6 w-full ml-auto'>
                    <Button
                      stylesType='secondary-btn'
                      onClick={cancelHandler}
                      title={t('cancel')}
                      className='h-12'
                      fullWidth
                    />

                    <Button
                      showLoadingIndicator={isUserDataUpdating}
                      disabled={disableFormButtons}
                      title={t('save')}
                      className='h-12'
                      type='submit'
                      fullWidth
                    />
                  </div>
                </ProfileInputWrapper>
              )}
            </form>
          </FormProvider>
        </div>
      ) : (
        <LoadingIcon centered />
      )}
    </>
  )
}

export default Profile
