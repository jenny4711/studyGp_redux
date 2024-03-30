import { createSlice } from '@reduxjs/toolkit';

const initialState={
  count:0,
  error:"",
  loading:false,
}

const countSlice = createSlice({
  name:'count',
  initialState,
  reducers:{
   
    addCount:(state,action)=>{
      state.loading=false;
      state.count+=action.payload
    },
    subCount:(state,action)=>{
      state.loading=false;
      state.count-=action.payload
    }
  }
})


export const counterActions = countSlice.actions
export default countSlice.reducer;