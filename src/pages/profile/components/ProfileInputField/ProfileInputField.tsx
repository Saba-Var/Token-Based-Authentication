import { ProfileInputWrapper } from '../ProfileInputWrapper'
import type { ProfileInputFieldProps } from './types'
import { TextInputField } from '@/components'

const ProfileInputField: React.FC<ProfileInputFieldProps> = ({ onClick, disabled, name }) => {
  return (
    <ProfileInputWrapper showEditButton={disabled} onClick={onClick}>
      <TextInputField disabled={disabled} name={name} />
    </ProfileInputWrapper>
  )
}

export default ProfileInputField
