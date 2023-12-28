import { useState } from 'react'
import Board from "./components/board"


function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <Board />
   </main>
  )
}

export default App
