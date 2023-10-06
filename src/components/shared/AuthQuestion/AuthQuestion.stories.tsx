import type { Meta, StoryObj } from '@storybook/react'
import { AuthQuestion } from '@/components'

const meta: Meta<typeof AuthQuestion> = {
  component: AuthQuestion,
  title: 'Core/AuthQuestion',
  args: {
    linkText: 'Sign up',
    questionText: 'Don’t have an account',
    redirectUrl: '/auth/sign-up',
  },
  argTypes: {
    linkText: {
      description: 'The text of the link',
    },
    questionText: {
      description: 'The text of the question',
    },
    redirectUrl: {
      description: 'The url to redirect to',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'The AuthQuestion component is used to redirect the user to another page',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof AuthQuestion>

export const AuthQuestionStory: Story = {}
