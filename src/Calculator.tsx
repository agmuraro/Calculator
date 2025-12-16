import { useState } from 'react';
import './Calculator.css';

export function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingNext, setWaitingNext] = useState(false);

  function handleNumber(number) {
    if (waitingNext) {
      setDisplay(number);
      setWaitingNext(false);
    } else {
      setDisplay(display === '0' ? number : display + number);
    }
  }

  function deleteNumbers() {
    setDisplay('0');
  }

  function handleOperation(operations) {
    setPreviousValue(Number(display));
    setOperation(operations);
    setWaitingNext(true);
  }

  function handleEquals() {
    if (previousValue === null || operation === null) return;

    const currentValue = Number(display);
    let result = 0;

    if (operation === '+') {
      result = previousValue + currentValue;
    }

    if (operation === '-') {
      result = previousValue - currentValue;
    }

    if (operation === 'x') {
      result = previousValue * currentValue;
    }

    if (operation === '%') {
      result = previousValue % currentValue;
    }

    if (operation === '/') {
      result = previousValue / currentValue;
    }

    setDisplay(String(result));
    setPreviousValue(null);
    setOperation(null);
  }

  return (
    <>
      <div className='calculatorBox'>
        <h1>calculator</h1>

        <div className='display'>
          <input disabled value={display} />
        </div>

        <div className='buttons'>
          <button className='orangeButton' onClick={deleteNumbers}>
            AC
          </button>
          <button
            className='operatorButton'
            onClick={() => handleOperation('%')}
          >
            %
          </button>
          <button
            className='operatorButton'
            onClick={() => handleOperation('/')}
          >
            ÷
          </button>
          <button
            className='operatorButton'
            onClick={() => handleOperation('x')}
          >
            x
          </button>
          <button onClick={() => handleNumber('7')}>7</button>
          <button onClick={() => handleNumber('8')}>8</button>
          <button onClick={() => handleNumber('9')}>9</button>
          <button
            className='operatorButton'
            onClick={() => handleOperation('-')}
          >
            -
          </button>
          <button onClick={() => handleNumber('4')}>4</button>
          <button onClick={() => handleNumber('5')}>5</button>
          <button onClick={() => handleNumber('6')}>6</button>
          <button
            className='operatorButton'
            onClick={() => handleOperation('+')}
          >
            +
          </button>
          <button onClick={() => handleNumber('2')}>2</button>
          <button onClick={() => handleNumber('1')}>1</button>
          <button onClick={() => handleNumber('3')}>3</button>
          <button className='operatorButton' onClick={() => handleNumber('.')}>
            .
          </button>
          <button className='zeroButton' onClick={() => handleNumber('0')}>
            0
          </button>
          <button className='orangeButton zeroButton' onClick={handleEquals}>
            =
          </button>
        </div>
      </div>
    </>
  );
}
