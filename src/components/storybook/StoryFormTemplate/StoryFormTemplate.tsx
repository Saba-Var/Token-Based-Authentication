import useStoryFormTemplate from './useStoryFormTemplate'
import { StoryInputTemplateProps } from './types'
import { FormProvider } from 'react-hook-form'

const StoryFormTemplate: React.FC<StoryInputTemplateProps> = (props) => {
  const { form } = useStoryFormTemplate(props)

  return (
    <FormProvider {...form}>
      <form>
        <>{props.children}</>
      </form>
    </FormProvider>
  )
}

export default StoryFormTemplate
