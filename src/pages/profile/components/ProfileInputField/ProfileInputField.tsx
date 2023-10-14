import { ProfileInputWrapper } from '../ProfileInputWrapper'
import type { ProfileInputFieldProps } from './types'
import { TextInputField } from '@/components'

const ProfileInputField: React.FC<ProfileInputFieldProps> = ({
  showEditButton,
  defaultValue,
  disabled,
  onClick,
  label,
  name,
}) => {
  return (
    <ProfileInputWrapper cySelectorName={name} showEditButton={showEditButton} onClick={onClick}>
      <TextInputField
        label={label ? label : ''}
        defaultValue={defaultValue}
        disabled={disabled}
        name={name}
      />
    </ProfileInputWrapper>
  )
}

export default ProfileInputField
