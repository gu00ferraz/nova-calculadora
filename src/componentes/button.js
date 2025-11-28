import React from "react";
import './button.css'

export default function MeuBotao (props) {

return(

<button onClick={e => props.aoClicar && props.aoClicar(props.label)} className = 'button'>{props.label}</button>

)

}
