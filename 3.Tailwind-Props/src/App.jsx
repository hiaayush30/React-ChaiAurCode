import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  const obj={
    name:"Aayush",
    age:21
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline bg-red-500 rounded mb-10">
        Hello world!
      </h1>
    <Card name="Jenny"/>
    <Card/>
    <Card name="Debby" someObj={obj} someArray={[1,2,3,4,5,6]}/>
    </div>

  )
}

export default App
