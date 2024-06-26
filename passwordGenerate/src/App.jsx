import { useState,useCallback } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed,setNumAllowed]=useState(false)
  const [charAllowed,setcharAllowed]=useState(false)
  const [password,setPassword]=useState("")
  const passwordGenerator=useCallback(()=>{
    
  },[length,numAllowed,charAllowed,setPassword])
  return (
    <>
     <h1 className='text-4xl text-center text-white'>PassWord Generator</h1> 
    </>
  )
}

export default App
