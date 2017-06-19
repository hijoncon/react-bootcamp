import React from 'react';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';

import store from './state';
import NumberTracker from './NumberTrackerContainer';

/*
   Example 8: State Organization
*/

//does not see outside of itself

const Example7 = (props) => {
  return (
    <Provider store={store}>
      <NumberTracker />
    </Provider>
  );
};

Example7.propTypes = {
};

export default Example7;
