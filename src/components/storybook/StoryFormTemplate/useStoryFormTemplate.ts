import { StoryInputTemplateProps } from './types'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

const useStoryFormTemplate = ({
  generateError,
  customValue,
  inputName,
}: StoryInputTemplateProps) => {
  const form = useForm()

  useEffect(() => {
    if (generateError && inputName) {
      form.setError(inputName, {
        type: 'manual',
        message: 'This is a manual error',
      })
    }

    if (customValue && inputName) {
      form.setValue(inputName, customValue)
    }
  }, [customValue, form, generateError, inputName])

  return { form }
}

export default useStoryFormTemplate
