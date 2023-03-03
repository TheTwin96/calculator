import './App.css';
import Button from './components/Button';
import freecodecamp_logo from './images/Freecodecamp_Logo.png';
import Screen from './components/Screen.jsx'
import Button_Clear from './components/Button_Clear.jsx'
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [ input, setInput ] = useState('');

  const addInput = value => {
    setInput(input + value);
  }

  const clearScreen = () => {
    setInput('');
  }

  const calculate = () => {
    //Las cadenas de caracteres vacías, retornan false. Entonces no se cumple la condición del ciclo if.
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Ingrese valores para calcular");
    }
  }

  return (
    <div className="App">
      <div className="freecodecamp_logo_container">
        <img className="freecodecamp_logo" src={freecodecamp_logo} alt="Freecodecamp's logo" />
      </div>
      <div className="container_calculator">
        <Screen input={input} />
        <div className="row">
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          <Button manageClick={addInput}>-</Button>
        </div>
        <div className="row">
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          <Button manageClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button manageClick={calculate}>=</Button>
          <Button manageClick={addInput}>0</Button>
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={addInput}>/</Button>
        </div>
        <div className="row">
          <Button_Clear manageClear={clearScreen}>Clear</Button_Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
