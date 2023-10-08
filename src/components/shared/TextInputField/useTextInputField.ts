import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { UseTextInputParams } from './types'
import { useState } from 'react'

const useInputField = ({ showValidation, name, type }: UseTextInputParams) => {
  const [inputType, setInputType] = useState(type)

  const { t } = useTranslation()

  const {
    formState: { errors, touchedFields, isDirty },
    register,
  } = useFormContext()

  const isValid = touchedFields[name] && !errors[name]?.message && isDirty

  const passwordShowHandler = () => {
    if (inputType === 'password') {
      return setInputType('text')
    }
    setInputType('password')
  }

  return {
    isError: !!errors[name]?.message && showValidation,
    isPasswordField: type === 'password',
    passwordShowHandler,
    inputType,
    register,
    isValid,
    errors,
    t,
  }
}

export default useInputField
