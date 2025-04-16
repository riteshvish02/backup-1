import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducer/Userslice'
export const store = configureStore({
  reducer: {
    counter:userSlice
  },
})

