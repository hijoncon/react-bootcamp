import React from 'react';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';

import store from './state';
import NumberTracker from './NumberTrackerContainer';

/*
   Example 8: State Organization
*/

const Example8 = (props) => {
  return (
    <Provider store={store}>
      <NumberTracker />
    </Provider>
  );
};

export default Example8;
