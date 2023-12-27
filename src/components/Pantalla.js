import React from 'react';
import '../styles/pantalla.css';

// Cambia el nombre de la clase del contenedor externo a 'input-container'
const Pantalla = ({ input }) => {
    return (
      <div className='input-container'>
        <input className='input-text' type='text' value={input} readOnly />
      </div>
    );
  };
  

export default Pantalla;
