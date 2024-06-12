import { useState } from 'react'
import './App.css'

function App() {
  let [count,setCount]=useState(0);
  return (
    <div>
      <h1>Chai aur React</h1>
      <h2>Counter Value:{count}</h2>
      <button onClick={()=>{
      if(count==20){alert("Count can't exceed 20!")
       return;
      };
      setCount(count+1)}}>Add</button><br/>
      <button onClick={()=>{
     if(count==0){alert("Count can't be negative!");
     return;
     };
    setCount(count-1)}}>Remove</button> 
    </div>
  )
}

export default App
