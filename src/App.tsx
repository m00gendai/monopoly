import { useState } from 'react'
import Board from "./components/board"
import Accessories from "./components/Accessories"

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <Board />
    <Accessories />
   </main>
  )
}

export default App
