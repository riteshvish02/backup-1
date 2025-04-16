import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    create:(state,action)=>{
        console.log(action);
        state.value.push(action.payload)
    },
    deleteuser:(state,action)=>{
      state.value.splice(action.payload,1)
    }
  },
})

// Action creators are generated for each case reducer function
export const {create,deleteuser} = userSlice.actions

export default userSlice.reducer