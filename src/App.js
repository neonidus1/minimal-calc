import logo from './logo.svg';
import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import { useState } from 'react';
import BotonClear from './components/BotonClear';
import { evaluate, number, or, format, cos, sin, tan, pi, sqrt, log, exp } from "mathjs";

function App() {

const [input, setInput] = useState('');
const [cursorPosition, setCursorPosition] = useState(-1);

const calcularResultado = () => {
  if (input) {
    setInput(format(evaluate(input), { precision: 10, lowerExp: -10, upperExp: 10 }));
  } else {
    alert("Por favor ingrese valores");
  }
};
const agregarInput = (val) => {
    setInput(input.slice(0, cursorPosition + 1) + val + input.slice(cursorPosition + 1));
};
const haciaAtras = () => {
  if (cursorPosition > -1) {
    setCursorPosition(cursorPosition - 1); // Mueve la posición de la barra de inserción hacia atrás
  }
};

const haciaAdelante = () => {
  if (cursorPosition < input.length - 1) {
    setCursorPosition(cursorPosition + 1); // Mueve la posición de la barra de inserción hacia adelante
  }
};
  return (
    <div className='App'>
      <h1> Calculadora Minimalista</h1>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'> 
          <Boton manejarClick={agregarInput}>cos(</Boton>
          <Boton manejarClick={agregarInput}>sin(</Boton>
          <Boton manejarClick={agregarInput}>tan(</Boton>
          <BotonClear manejarClear={() => setInput('')}>
            AC
          </BotonClear>
        </div>
        <div className='fila'> 
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>(</Boton>
          <Boton manejarClick={agregarInput}>)</Boton>
          <Boton manejarClick={haciaAtras}>&larr;</Boton>
          <Boton manejarClick={haciaAdelante}>&rarr;</Boton>
        </div>  

      </div>
    </div>
  );
}

export default App;
