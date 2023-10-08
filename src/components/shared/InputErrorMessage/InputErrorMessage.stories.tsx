import type { Meta, StoryObj } from '@storybook/react'
import { InputErrorMessage } from '@/components'

const meta: Meta<typeof InputErrorMessage> = {
  component: InputErrorMessage,
  title: 'Core/InputErrorMessage',
  args: {
    errorMessage: 'This is an error message',
  },
  argTypes: {
    errorMessage: {
      description: 'The error message to display',
    },
  },
}

export default meta

type Story = StoryObj<typeof InputErrorMessage>

export const Basic: Story = {}
