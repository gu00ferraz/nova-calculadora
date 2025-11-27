import React from "react";
import './button.css'

export default function MeuBotao (props) {

return(

<button onClick={props.aoClicar} className = 'button'>{props.label}</button>

)

}
