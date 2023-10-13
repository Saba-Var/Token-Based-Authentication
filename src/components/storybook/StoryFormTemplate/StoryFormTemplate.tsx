import useStoryFormTemplate from './useStoryFormTemplate'
import { StoryInputTemplateProps } from './types'
import { FormProvider } from 'react-hook-form'
import { Form } from 'react-router-dom'

const StoryFormTemplate: React.FC<StoryInputTemplateProps> = (props) => {
  const { form } = useStoryFormTemplate(props)

  return (
    <FormProvider {...form}>
      <Form>
        <>{props.children}</>
      </Form>
    </FormProvider>
  )
}

export default StoryFormTemplate
