import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accessToken: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
    removeAccessToken: (state) => {
      state.accessToken = ''
    },
  },
})

export const { setAccessToken, removeAccessToken } = authSlice.actions

export default authSlice.reducer
