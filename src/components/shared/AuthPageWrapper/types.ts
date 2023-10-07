export type AuthWrapperProps = {
  page: 'log-in' | 'sign-up' | 'reset-password-request' | 'reset-password'
  children: JSX.Element
  title: string
}
