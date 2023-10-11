import type { AuthPageRoute } from '@/types'

export type AuthRoutesWithoutNewPassword = Exclude<AuthPageRoute, 'new-password'>
