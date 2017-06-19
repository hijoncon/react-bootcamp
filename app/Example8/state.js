import { createStore } from 'redux';
import _ from 'lodash';

//keep
const initialState = 0;

const reducer = (state, action) => {
  if(_.isNil(state)) {
    return initialState;
  }

  switch(action.type) {
  case "INC":
    return state + action.value;
  case "DEC":
    return state - action.value;
  }
  return state;
};

export const createIncrementAction = (value=1) =>  ({
  type: 'INC',
  value
});

export const createDecrementAction = (value=1) =>  ({
  type: 'DEC',
  value
});

const store = createStore(reducer);

export default store;
