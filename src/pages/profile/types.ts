export type ProfileFormValues = {
  username: string
  email?: string
}

export type DisabledInputFieldsHandlerValues = {
  name: keyof ProfileFormValues
  disabled: boolean
}
