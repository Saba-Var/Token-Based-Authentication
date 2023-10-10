import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { User } from '@/types'

const initialState: User = {
  username: '',
  email: '',
  image: '',
  _id: '',
} as const

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state._id = action.payload._id
      state.username = action.payload.username
      state.email = action.payload.email
      state.image = action.payload.image
    },
    removeUser: (state) => {
      state._id = ''
      state.username = ''
      state.email = ''
      state.image = ''
    },
  },
})

export const { removeUser, setUser } = userSlice.actions

export default userSlice.reducer
