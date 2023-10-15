import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from '@/components'

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'Core/Navbar',
  decorators: [
    (Story) => (
      <div className='flex w-full h-32'>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Navbar>

export const NavbarStory: Story = {}
