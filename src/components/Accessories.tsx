import s from "../styles/Accessories.module.css"

interface Props{
    setDiceRoll: React.Dispatch<React.SetStateAction<number[]>>
    playerField: number
    setPlayerField: React.Dispatch<React.SetStateAction<number>>
}

export default function Accessories({setDiceRoll, playerField, setPlayerField}:Props){

    function rollDice(min:number, max:number){

        const dice1:number = Math.floor(Math.random()*(max-min)+min)
        const dice2:number = Math.floor(Math.random()*(max-min)+min)
        setDiceRoll([dice1, dice2])
        const diceSum:number = dice1 + dice2
    if(playerField + diceSum > 39){
      setPlayerField((playerField+diceSum)-40)
    } else {
      setPlayerField(playerField + diceSum)
    }
    }

    return(
        <div className={s.area}>
            <button onClick={()=>rollDice(1, 7)}>Würflen</button>
        </div>
    )
}