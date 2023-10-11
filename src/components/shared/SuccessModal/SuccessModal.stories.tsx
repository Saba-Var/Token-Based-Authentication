import type { Meta, StoryFn } from '@storybook/react'
import { SuccessModal, Button } from '@/components'
import { useArgs } from '@storybook/client-api'
import { SuccessModalProps } from './types'
import { SetState } from '@/types'

const meta: Meta<typeof SuccessModal> = {
  component: SuccessModal,
  title: 'Core/SuccessModal',
  tags: ['autodocs'],
  args: {
    show: false,
    closeWithOverlay: true,
    actionText: 'Action text',
    title: 'Title',
    description: 'Description',
    showOnlyCloseButton: true,
    redirectUri: '/auth/log-in',
  },

  argTypes: {
    setSuccess: {
      description: 'Function to toggle the modal',
    },
    show: {
      description: 'Show the modal',
      control: 'boolean',
    },
    closeWithOverlay: {
      description: 'Close the modal when clicking on the overlay',
      control: 'boolean',
    },
    actionText: {
      description: 'Text for the action button',
      control: 'text',
    },
    linkAction: {
      description: 'Whether the action button is a link or a button',
      control: 'boolean',
    },
    linkActionText: {
      description: 'Text for the action link',
      control: 'text',
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    showOnlyCloseButton: {
      control: 'boolean',
    },
    redirectUri: {
      control: 'text',
      description: 'Redirect URI for the action link',
    },
  },
}

export default meta

export const SuccessModalStory: StoryFn<typeof SuccessModal> = () => {
  const [args, updateArgs] = useArgs<SuccessModalProps>()

  const setOpen = (show: boolean) => {
    updateArgs({
      ...args,
      show,
    })
  }

  return (
    <>
      <SuccessModal {...args} show={args.show} setSuccess={setOpen as SetState<boolean>} />

      <Button onClick={() => setOpen(true)} title='Show success modal' />
    </>
  )
}
