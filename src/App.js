import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('0');

  const appendInput = value => {
    setInput(input === '0' ? value : input + value);
  };

  const calculateResult = () => {
    try {
      setInput(String(eval(input))); // Unsafe for real apps
    } catch (error) {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('0');
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="buttons">
          <button onClick={clearInput}>C</button>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
            <button key={number} onClick={() => appendInput(number.toString())}>
              {number}
            </button>
          ))}
          <button onClick={() => appendInput('+')}>+</button>
          <button onClick={() => appendInput('-')}>-</button>
          <button onClick={() => appendInput('*')}>*</button>
          <button onClick={() => appendInput('/')}>/</button>
          <button onClick={calculateResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;