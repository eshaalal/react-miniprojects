import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue=()=>{
    setCount(prevCount=>prevCount+1)
    setCount(prevCount=>prevCount+1)
    setCount(prevCount=>prevCount+1)
    setCount(prevCount=>prevCount+1)
  }
  const removeValue=()=>{
    setCount(count-1)
  }
  return (
    <>
      <h2>Change the Value</h2>
      <h1>Counter Value:{count}</h1>
      <button onClick={addValue}>Add Value{count}</button>
      <button onClick={removeValue}>Remove Value{count}</button>
    </>
  )
}

export default App
