import React, { useState } from 'react';

const App = () => {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');

  const calcBmi = (e) => {
    e.preventDefault();

    if (weight === '' || height === '') {
      alert("Please enter valid weight & height");
      return;
    }

    const w = parseFloat(weight); // kg
    const h = parseFloat(height); // meters (supports decimals like 1.75, 1.8, 2.5)

    if (h === 0) {
      alert("Height cannot be zero");
      return;
    }

    // BMI formula (standard)
    const bmiValue = w / (h * h);
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setMessage('You are underweight');
      setColor('yellow');
    }
    else if (bmiValue >= 18.5 && bmiValue < 25) {
      setMessage('You are healthy');
      setColor('green');
    }
    else {
      setMessage('You are overweight');
      setColor('red');
    }
  };

  const reload = () => {
    setWeight('');
    setHeight('');
    setBmi('');
    setMessage('');
    setColor('');
  };

  return (
    <div className='App'>
      <div className='container'>
        <h2>BMI Calculator</h2>

        {/* Enter key works automatically in form */}
        <form onSubmit={calcBmi}>

          <div>
            <label>Weight (kg)</label>
            <input
              type='number'
              placeholder='Enter weight (kg)'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height (m)</label>
            <input
              type='number'
              step="any"
              placeholder='Enter height (meters)'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className='button-group'>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' type='button' onClick={reload}>
              Clear
            </button>
          </div>

          <div className='center'>
            {bmi && <h3 className={color}>Your BMI is: {bmi}</h3>}
            {message && <p className={color}>{message}</p>}
          </div>

        </form>
      </div>
    </div>
  );
};

export default App;