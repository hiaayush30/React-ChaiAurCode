import { useState,useCallback, useEffect,useRef } from 'react'

function App() {
  const [length,setLength]=useState(10);
  const[numReq,setNumReq]=useState(false);
  const[charReq,setCharReq]=useState(false);
  const [pass,setPass]=useState("");
  const[button,setButton]=useState(false);
  const passwordRef=useRef(null);
 
  const passwordGenerator=useCallback(function(){
    let password="";
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(numReq) str+='0123456789';
    if(charReq) str+='!@#$%^&*()_+{}';
    
    for(let i=0;i<length;i++){
      let arr=Array.from(str);
      console.log(arr);
      const num=Math.floor(Math.random()*str.length);
      password=password+arr[num];
    }
    console.log(`password:${password}`);
    setPass(password);
    setButton(false);
  },[length,charReq,numReq])


  useEffect(()=>{
    passwordGenerator()
  },[length,numReq,charReq]);

  const copyPassword=useCallback(function(){
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(pass);
  },[pass]);

  return (
    <div style={{backgroundColor:'#212121'}} className='w-full h-screen'>
    <h1 className='text-white text-center'>Password Generator</h1>
    <input className='ml-3' defaultValue='10' onChange={(e)=>{setLength(e.target.value)}} type='range' max='20'></input>

    <div className='flex flex-wrap'>
    <div className='ml-3 text-white'>Length:{length}</div>  
    <div>
    <label className='ml-3 text-white' for='numcheck'>Include Numbers</label>
    <input className='ml-1 mr-3' id='numcheck' type='checkbox' onChange={()=>{setNumReq(numReq=>!numReq)}}></input>
    </div>
    <div>
    <label className='ml-3 text-white' for='charcheck'>Include Characters</label>
    <input className='ml-1 mr-3' id='charcheck' type='checkbox' onChange={()=>{setCharReq(charReq=>!charReq)}}></input>
    </div>
    </div>

    <button className='mt-3 bg-white rounded ml-3 p-1' onClick={passwordGenerator}>Generate</button>
    <div className='flex flex-wrap mt-5'>
    <input ref={passwordRef} value={pass} readOnly placeholder='Password' className='pl-1 ml-3 bg-white rounded-tl rounded-bl'/>
    <button onClick={()=>{
      copyPassword();
      if(button==false) setButton(btn=>!btn)
    }} className='hover:bg-red-500 cursor-pointer pr-1 pl-1  text-white rounded-tr rounded-br border boder-white'>{button ? "Done!":"Copy"}</button>
    </div>
    </div>
  )
}

export default App
