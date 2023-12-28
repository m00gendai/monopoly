import { Field } from "../interfaces"
import s from "../styles/PlayingField.module.css"

interface Props{
    field: Field
}

export default function PlayingField({field}:Props){
    return(
        <div 
            className={s.field} 
            style={{
                aspectRatio: `${field.isSpacer ? "9/9" : field.width === field.height ? "1/1" : field.orientation === "top" ? "1/2" : field.orientation === "bottom" ? "1/2" : "2/1"}`,
            }}
        >
            {field.isProperty ? 
                <div 
                    className={s.color} 
                    style={
                        field.orientation === "top" ? {top: 0, left: 0, width: "100%", background: `${field.propertyColor}`, aspectRatio: "5/1"} :
                        field.orientation === "right" ? {top: 0, right: 0, height: "100%", background: `${field.propertyColor}`, aspectRatio: "1/5"} :
                        field.orientation === "bottom" ? {bottom: 0, left: 0, width: "100%", background: `${field.propertyColor}`, aspectRatio: "5/1"} :
                        {bottom: 0, left: 0, height: "100%", background: `${field.propertyColor}`, aspectRatio: "1/5"}
                    }
                >
                </div> 
            : null}
            <div>{field.boardNumber}</div>
        </div>
    )
}