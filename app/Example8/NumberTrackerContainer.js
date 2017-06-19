import { connect } from 'react-redux';
import { increment, decrement } from './state';

import NumberTracker from './NumberTracker';

const mapStateToProps = (state) => {
  return {
    number: state
  };
};

//The long way of doing the above --^

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment(5)),
    decrement: () => dispatch(decrement(10))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberTracker);
