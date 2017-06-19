import React from 'react';

const NumberTracker = ({number, increment, decrement}) => (
  <div>
    <p>{number}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);

export default NumberTracker;
