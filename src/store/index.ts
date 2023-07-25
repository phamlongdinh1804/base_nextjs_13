import { configureStore } from '@reduxjs/toolkit'

import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    authUser: userReducer,
    // Có thể khai báo nhiều slide khác tương tự
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
