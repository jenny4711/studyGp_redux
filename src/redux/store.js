import { configureStore } from '@reduxjs/toolkit';
import countReducer from './Reducers/countReducer';

 const store = configureStore({
  reducer:{
    count:countReducer,
  }
})

export default store;