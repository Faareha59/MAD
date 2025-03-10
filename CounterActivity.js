import React, { useState } from 'react';

const ClassActivity = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 2);
  };

  const decrease = () => {
    setCounter(counter - 2);
  };

  const reset = () => {
    setCounter(0);
  };

  const getBackgroundColor = () => {
    if (counter > 0) {
      return 'green';
    } else if (counter < 0) {
      return 'purple';
    } else {
      return 'white';
    }
  };

  return (
    <div style={{ backgroundColor: getBackgroundColor() }}>
      <h1>Counter: {counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ClassActivity;