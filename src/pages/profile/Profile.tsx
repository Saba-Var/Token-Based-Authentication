import { LoadingIcon, TextInputField } from '@/components'
import { ProfileInputWrapper } from './components'
import { FormProvider } from 'react-hook-form'
import useProfile from './useProfile'

const Profile = () => {
  const { setIsUserImageLoading, isUserImageLoading, submitHandler, handleSubmit, user, form } =
    useProfile()

  return (
    <>
      {user._id ? (
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
            <form onSubmit={handleSubmit(submitHandler)} className='mt-8'>
              <ProfileInputWrapper showEditButton>
                <TextInputField disabled name='username' />
              </ProfileInputWrapper>

              <ProfileInputWrapper showEditButton>
                <TextInputField disabled name='email' />
              </ProfileInputWrapper>
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
