import { CheckboxInputField, StoryFormTemplate } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CheckboxInputField> = {
  component: CheckboxInputField,
  title: 'Core/CheckboxInputField',
  args: {
    name: 'rememberMe',
    text: 'Remember me',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StoryFormTemplate>
        <Story />
      </StoryFormTemplate>
    ),
  ],

  argTypes: {
    name: {
      description:
        'The name of the input field. This is used to register the field inside the form with react-hook-form',
    },
    text: {
      description: 'The text to show next to the checkbox',
    },
    disabled: {
      description: 'Whether the input field is disabled',
    },
    checked: {
      description:
        'Whether the input field is checked. Note: recommended way is to set a default value in useForm.',
    },
  },
}

export default meta

type Story = StoryObj<typeof CheckboxInputField>

export const Basic: Story = {}

export const DisabledUnchecked: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
}
