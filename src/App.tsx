import { useEffect, useState } from 'react'
import Board from "./components/board"
import Accessories from "./components/Accessories"

function App() {
  const [playerField, setPlayerField] = useState<number>(0)
  const [diceRoll, setDiceRoll] = useState<number[]>([0,0])

  return (
   <main>
    <Board playerField={playerField}/>
    <Accessories setDiceRoll={setDiceRoll} playerField={playerField} setPlayerField={setPlayerField}/>
   </main>
  )
}

export default App
