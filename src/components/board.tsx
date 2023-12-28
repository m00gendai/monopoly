import { fields } from "../lib/fields"
import PlayingField from "../components/PlayingField"
import s from "../styles/Board.module.css"

interface Props{
    playerField: number
}

export default function Board({playerField}:Props){

    return(
        <div className={s.board}>
            {
                fields.map(field =>{
                    return(
                        <div 
                            key={`field_${field.id}`}
                            id={`field_${field.boardNumber}`}
                            style={{
                                width: "100%",
                                aspectRatio: `${field.isSpacer ? "9/9" : field.width === field.height ? "1/1" : field.orientation === "top" ? "1/2" : field.orientation === "bottom" ? "1/2" : "2/1"}`,
                                background: "black",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gridColumn: `auto / span ${field.height === field.width ? 2 : field.isSpacer ? 9 : field.orientation === "left" ? 2 : field.orientation === "right" ? 2 : 1}`,
                                gridRow: `auto / span ${field.isSpacer ? 9 : 1}`
                            }}
                        >
                            <PlayingField field={field} playerField={playerField}/>
                        </div>
                    ) 
                })
            }
        </div>
    )
}