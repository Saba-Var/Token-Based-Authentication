import type { Meta, StoryObj } from '@storybook/react'
import { LanguageSelector } from '@/components'

const meta: Meta<typeof LanguageSelector> = {
  component: LanguageSelector,
  title: 'Core/LanguageSelector',
  decorators: [
    (Story) => (
      <div className='flex w-full h-32'>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'The LanguageSelector component is used to select the language of the app',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof LanguageSelector>

export const AuthQuestionStory: Story = {}
