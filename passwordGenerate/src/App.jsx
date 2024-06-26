import { useState,useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numAllowed,setNumAllowed]=useState(false)
  const [charAllowed,setcharAllowed]=useState(false)
  const [password,setPassword]=useState("")
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+="123456789"
    if(charAllowed) str+="@$%^&*()}{[]~|"
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass=str.charAt(char);

    }
    setPassword(pass)


  },[length,numAllowed,charAllowed,setPassword])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg bg-slate-700 px-4 py-3 my-8 text-orange-600'>
      <h1 className='text-white text-center my-3 rounded-lg'>Password Generator</h1>
    <div className='flex shadow overflow-hidded mb-4 rounded-lg'>
      <input 
      type="text" 
      value={password} 
      className="outline-none w-full py-1 px-3" 
      placeholder="password" 
      readOnly/>
      <button className='text-white py-0.5 px-2 bg-blue-600 rounded-lg'>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label className='text-white'>Length:{length}</label>
      </div>
      <input 
      type="checkbox"
      defaultChecked={numAllowed}
      id="numberInput"
      onChange={()=>{
        setNumAllowed((prev)=>!prev);
      }}
      ></input>
      <label htmlFor="numberInput"className='text-white'>Numbers</label>
      <input 
      type="checkbox"
      defaultChecked={numAllowed}
      id="characterInput"
      onChange={()=>{
        setCharAllowed((prev)=>!prev);
      }}
      ></input>
      <label htmlFor="characterInput"className='text-white'>Character</label>
    </div>
    
    </div>
    </>
  )
}

export default App
