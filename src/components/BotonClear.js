import React from "react";
import "../styles/botonClear.css";

const BotonClear = (props) => {
    return (
    <button className="boton-clear" onClick={props.manejarClear}>
        {props.children}
    </button>
    )

}

export default BotonClear