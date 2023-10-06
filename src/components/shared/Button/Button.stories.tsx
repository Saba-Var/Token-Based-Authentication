import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Core/Button',
  args: {
    title: 'Button',
  },
  argTypes: {
    stylesType: {
      description: 'The type of button to render',
    },
    disabled: {
      description: 'Whether the button is disabled',
    },
    fullWidth: {
      description: 'Whether the button should take up the full width of the parent container',
    },
    className: {
      description: 'The classes to apply to the button',
    },
    title: {
      description: 'The title of the button',
    },
    onClick: {
      description: 'The click handler for the button',
      action: 'clicked',
    },
    children: {
      description: 'The children of the button',
    },
    showLoadingIndicator: {
      description: 'Whether to show the loading indicator',
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {}

export const Soft: Story = {
  args: {
    stylesType: 'soft-btn',
  },
}

export const Secondary: Story = {
  args: {
    stylesType: 'secondary-btn',
  },
}

export const Danger: Story = {
  args: {
    stylesType: 'danger-btn',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    onClick: () => {},
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  parameters: { layout: 'fullscreen' },
}

export const DisabledAndLoading: Story = {
  args: {
    disabled: true,
    showLoadingIndicator: true,
    onClick: () => {},
  },
}

export const CustomStyling: Story = {
  args: {
    title: 'Custom Styling',
    className: 'bg-yellow-500 hover:bg-green',
    fullWidth: true,
  },
}

export const Children: Story = {
  args: {
    stylesType: 'secondary-btn',
    title: '',
    className: 'py-12 w-24',
    children: (
      <div className='flex flex-col'>
        <p>Button</p>
        <p>with</p>
        <p>children</p>
      </div>
    ),
  },
}
