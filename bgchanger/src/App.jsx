import {useState} from "react"

function App() {
  const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="bg-white flex flex-wrap rounded-full justify-center gap-3 shadow-lg px-3 py-2 ">
          <button onClick={()=>setColor("red")}className="bg-red-600 outline-none py-1 px-4 rounded-full text-white shadow-lg">Red</button>
          
        </div>
        <div className="bg-white flex flex-wrap rounded-full justify-center gap-3 shadow-lg px-3 py-2 ">
          <button onClick={()=>setColor("green")}className="bg-green-600 outline-none py-1 px-4 rounded-full text-white shadow-lg">Green</button>
          
        </div>
        <div className="bg-white flex flex-wrap rounded-full justify-center gap-3 shadow-lg px-3 py-2 ">
          <button onClick={()=>setColor("blue")}className="bg-blue-600 outline-none py-1 px-4 rounded-full text-white shadow-lg">Blue</button>
          
        </div>
        <div className="bg-white flex flex-wrap rounded-full justify-center gap-3 shadow-lg px-3 py-2 ">
          <button onClick={()=>setColor("yellow")} className="bg-yellow-600 outline-none py-1 px-4 rounded-full text-white shadow-lg">Yellow</button>
          
        </div>
        <div className="bg-white flex flex-wrap rounded-full justify-center gap-3 shadow-lg px-3 py-2 ">
          <button onClick={()=>setColor("violet")}className="bg-violet-600 outline-none py-1 px-4 rounded-full text-white shadow-lg">Violet</button>
          
        </div>
        <div className="bg-white flex flex-wrap rounded-full justify-center gap-3 shadow-lg px-3 py-2 ">
          <button onClick={()=>setColor("pink")}className="bg-pink-600 outline-none py-1 px-4 rounded-full text-white shadow-lg">Pink</button>
          
        </div>
        <div className="bg-white flex flex-wrap rounded-full justify-center gap-3 shadow-lg px-3 py-2 ">
          <button onClick={()=>setColor("orange")}className="bg-orange-600 outline-none py-1 px-4 rounded-full text-white shadow-lg">Orange</button>
          
        </div>

      </div>
    </div>
  )
}

export default App
