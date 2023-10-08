import { SetState } from '@/types'

export type SuccessModalProps = {
  setSuccess: SetState<boolean>
  showOnlyCloseButton?: boolean
  closeWithOverlay?: boolean
  clickHandler?: () => void
  linkActionText?: string
  linkAction?: boolean
  description?: string
  actionText?: string
  title: string
  show: boolean
}
