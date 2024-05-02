import './App.css';
import { useState } from 'react';

function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [buttonColor, setButtonColor] = useState('red');
  const nextColor = buttonColor === 'red' ? 'blue' : 'red';
  const buttonClass = isChecked ? 'gray' : buttonColor;

  return (
    <div>
      <button
        className={buttonClass}
        onClick={() => {
          setButtonColor(nextColor);
        }}
        disabled={isChecked}
      >
        Change to {nextColor}
      </button>
      <input type="checkbox" id="checkbox" onClick={e => setIsChecked(e.target.checked)} />
      <label htmlFor="checkbox">disable button</label>
    </div>
  );
}

export default App;
