import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { authSliceReducer, userSliceReducer } from '@/store'

const reducer = combineReducers({
  authentication: authSliceReducer,
  user: userSliceReducer,
})

export const store = configureStore({
  reducer,
})

export type StoreRootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
