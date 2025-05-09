import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment:(state,action) => {
      state.value = action.payload
    },
    decrement:(state,action) => {
      state.value = action.payload
    },
    incrementby2:(state,action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment,decrement,incrementby2} = counterSlice.actions

export default counterSlice.reducer