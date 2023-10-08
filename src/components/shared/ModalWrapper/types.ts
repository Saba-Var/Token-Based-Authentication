export type ModalWrapperProps = {
  childrenContainerClassName?: string
  mainContainerClassName?: string
  type?: 'danger' | 'normal'
  submitHandler: () => void
  closeHandler?: () => void
  children: JSX.Element
  submitText?: string
  disabled?: boolean
  title: string
  open: boolean
}
