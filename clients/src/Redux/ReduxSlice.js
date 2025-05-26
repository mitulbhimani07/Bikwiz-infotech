import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email:'',
}

export const ReduxSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   setEmails:(state,actions)=>{
    state.email = actions.payload;
   }
    
  },
})

// Action creators are generated for each case reducer function
export const { setEmails } = ReduxSlice.actions

export default ReduxSlice.reducer