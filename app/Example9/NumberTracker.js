import React from 'react';
import PropTypes from 'prop-types'

const NumberTracker = ({number, increment, decrement, incrementAsync}) => (
  <div>
    <p>{number}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={incrementAsync}>Increment Async</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);

NumberTracker.propTypes = {
  number: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
}

export default NumberTracker;
