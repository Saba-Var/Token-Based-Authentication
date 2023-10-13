import { ProfileInputWrapper } from '../ProfileInputWrapper'
import type { ProfileInputFieldProps } from './types'
import { TextInputField } from '@/components'

const ProfileInputField: React.FC<ProfileInputFieldProps> = ({
  defaultValue,
  disabled,
  onClick,
  name,
}) => {
  return (
    <ProfileInputWrapper showEditButton={disabled} onClick={onClick}>
      <TextInputField defaultValue={defaultValue} disabled={disabled} name={name} />
    </ProfileInputWrapper>
  )
}

export default ProfileInputField
