import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { delay } from 'redux-saga'
import { put, call, takeLatest, select } from 'redux-saga-effects'
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

export const increment = (value=1) =>  ({
  type: 'INC',
  value
});

export const decrement = (value=1) =>  ({
  type: 'DEC',
  value
});

export const incrementAsync = (value=1) =>  ({
  type: 'INC_ASYNC',
  value
});

export function * incrementSaga() {
  yield delay(500)
  const currentValue = yield select(state => state)
  /*
  {
    SELECT: {
      fn: <fn>
    }
  }
  */
  if(currentValue > 50) {
    yield put(increment(3))
  } else { 
    yield put(increment(7))
  }
}

function * rootSaga() {
  yield [
    takeLatest('INC_ASYNC', incrementSaga)
  ]
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;