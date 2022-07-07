import { useState } from 'react';
import './App.css';

function App() {
  const[result, setResult]  = useState("")

  const handleChange = (e) => {
   setResult (result.concat(e.target.value));
   console.log('clicked ' + result);
  }
  const clear = () => {
    setResult("");
  };
  const backspace = () => { 
    setResult(result.slice(0, result.length - 1));
  };
  const calculate = () => {
  try {
  setResult(eval(result).toString()); 
  } catch (err) {
    setResult("error")
  }
  }
  return (
    <div className="container">
      <div className='calculator'>
      <input type="text" value={result} placeholder="0" />
    <button onClick={clear}>Cl</button>
    <button onClick={backspace} >Del</button>
    <button value='%' onClick= {handleChange}>%</button>
    <button value='/' onClick={handleChange}>&divide;</button>
    <button value='7' onClick={handleChange}>7</button>
    <button value='8' onClick={handleChange}>8</button>
    <button value='9' onClick={handleChange}>9</button>
    <button value='*' onClick={handleChange}>*</button>
    <button value='4' onClick={handleChange}>4</button>
    <button value='5' onClick={handleChange}>5</button>
    <button value='6' onClick={handleChange}>6</button>
    <button value='-' onClick={handleChange}>-</button>
    <button value='1' onClick={handleChange}>1</button>
    <button value='2' onClick={handleChange}>2</button>
    <button value='3' onClick={handleChange}>3</button>
    <button value='+' onClick={handleChange}>+</button>
    <button value='.' onClick={handleChange}>.</button>
    <button value='0' onClick={handleChange}>0</button>
    <button id='equalButton' onClick={calculate}>=</button>
      </div>
    
    </div>
  );
}

export default App;
