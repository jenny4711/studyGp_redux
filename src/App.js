import { useState } from 'react';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { addCount ,subCount} from './redux/Actions/countAtion';
function App() {
  const [count,setCount]=useState(0)
  const dispatch=useDispatch()
  const result = useSelector(state=>state.count.count)
 
  const increase=()=>{
  
    dispatch(addCount(5))
    
  }
  const decrease=()=>{
    dispatch(subCount(5))
  }
  
  return (
    <div className="App">
     <h1>{result}</h1>
     <button style={{"fontSize":"20px","padding":'8px'}} onClick={increase}>+</button>
     <button style={{"fontSize":"20px","padding":'8px'}} onClick={decrease}>-</button>
    </div>
  );
}

export default App;
