import { useState, useRef, useEffect } from "react";
import { fields } from "../lib/fields"
import PlayingField from "../components/PlayingField"
import s from "../styles/Board.module.css"

export default function Board(){

    const [width, setWidth] = useState(0);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setWidth(elementRef!.current!.getBoundingClientRect().width);
      }, []);

    return(
        <div className={s.board} ref={elementRef}>
            {
                fields.map(field =>{
                    return(
                        <div 
                            key={`field_${field.id}`}
                            style={{
                                width: "100%",
                                aspectRatio: `${field.isSpacer ? "9/1" : field.width === field.height ? "1/1" : field.orientation === "top" ? "1/2" : field.orientation === "bottom" ? "1/2" : "2/1"}`,
                                background: "black",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gridColumn: `auto / span ${field.height === field.width ? 2 : field.isSpacer ? 9 : field.orientation === "left" ? 2 : field.orientation === "right" ? 2 : 1}`
                            }}
                        >
                            <PlayingField field={field}/>
                        </div>
                    ) 
                })
            }
        </div>
    )
}