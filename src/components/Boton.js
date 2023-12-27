import React from 'react';
import '../styles/boton.css';
import { useState } from 'react';


function Boton(props) {   
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }
    return (
        <button className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
        onClick={() => props.manejarClick(props.children)}>
            {props.children}
        </button>
    )
}

export default Boton