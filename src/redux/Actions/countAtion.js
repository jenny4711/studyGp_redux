import { counterActions } from '../Reducers/countReducer';

export const addCount =(num)=>async(dispatch)=>{
  try{
    dispatch(counterActions.addCount(num))
  }catch(error){
    console.log(error,'error')
  }
}

export const subCount=(num)=>async(dispatch)=>{
  try{
    dispatch(counterActions.subCount(num))
  }catch(error){
    console.log(error,'error')
  }
}