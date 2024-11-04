// Calculator.js
import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState(''); // Stores input and result

  // Handle button click
  const handleClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display).toString()); // Evaluate expression
      } catch {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay(''); // Clear display
    } else {
      setDisplay(display + value); // Update display with button value
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-display">{display || '0'}</div>
      <div className="calculator-buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        <button className="clear-btn" onClick={() => handleClick('C')}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
