import { useState } from 'react'

function App() {
  const [color, setColor] = useState('#ffffff');
  const hex=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  function getColor(){
    let code="#";
    for (let index = 0; index < 6; index++) {
      const num=Math.floor(Math.random()*16)
      console.log('num:'+num);
      code=code+hex[num];
    }
    setColor(code);
  }

  return (
    <div style={{backgroundColor:color}} className='w-full h-screen flex flex-wrap flex-col justify-center items-center'>
    <h2>Welcome to Bg-Changer!</h2>
    <button className=' border border-black rounded p-3 m-3' onClick={async()=>{
      getColor();
      console.log(color);
    }}>CLICK ME</button>
    </div>
  )
}

export default App
