import { TextInputField, StoryFormTemplate } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TextInputField> = {
  component: TextInputField,
  title: 'Core/TextInputField',
  tags: ['autodocs'],
  args: {
    name: 'username',
    placeholder: 'Enter your name',
    label: 'Username',
  },
  argTypes: {
    name: {
      description:
        'The name of the input field. This is used to register the field inside the form with react-hook-form',
    },
    showEyeIcon: {
      description:
        "If the type is 'password', this will show the eye icon to toggle the password visibility",
    },
    placeholder: {
      description: 'The placeholder of the input field',
    },
    label: {
      description: 'The label of the input field',
    },
    labelClasses: {
      description: 'The classes to apply to the label',
    },
    showValidation: {
      description:
        'Whether to show the validation for the input field. If validation error exists, it will be shown',
    },
    autoComplete: {
      description: 'The autocomplete attribute of the input field',
    },
    disabled: {
      description: 'Whether the input field is disabled',
    },
    required: {
      description: 'Whether the input field is required',
    },
    type: {
      description: 'The type of the input field: text or password.',
    },
  },
  decorators: [
    (Story, { args: { name } }) => (
      <StoryFormTemplate inputName={name}>
        <Story />
      </StoryFormTemplate>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof TextInputField>

export const Text: Story = {}

export const Optional: Story = {
  args: { required: false },
}

export const Password: Story = {
  args: {
    placeholder: 'Enter your password',
    label: 'Password',
    name: 'password',
    type: 'password',
  },
}

export const PasswordWithoutIcon: Story = {
  args: {
    placeholder: 'Enter your password',
    showEyeIcon: false,
    label: 'Password',
    name: 'password',
    type: 'password',
  },
}

export const CustomLabel: Story = {
  args: {
    labelClasses: 'text-yellow-500 font-bold !text-2xl',
  },
}

/** Error is extracted automatically from useFormContext inside the component custom hook */
export const Error: Story = {
  decorators: [
    (Story, { args: { name } }) => (
      <StoryFormTemplate generateError inputName={name}>
        <Story />
      </StoryFormTemplate>
    ),
  ],
}

export const Disabled: Story = {
  args: { disabled: true },
}
