import React from "react"
import "./display.css"

export default function MeuDisplay (props) {

return(

<div className="display"> {props.value} </div>


//<button onClick={props.aoClicar} className = 'button'>{props.label}</button>

)

}