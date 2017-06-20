import { expect } from 'chai'
import { incrementSaga } from '../app/Example9/state'
import { delay } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { increment, reducer } from '../app/Example9/state'


describe('increment async', function() {
    it('should run the saga', function() {
        const delayResult = incrementSaga() //returns iterator: {done: <bool>, value: <any>, next: <func>}
        expect(delayResult.value).to.be.equal(delay(500))

        const selectResult = delayResult.next()
        const state = selectResult.value.SELECT.fn(20);

        const putResult = selectResult.next(state)
        expect(putResult.value).to.be.equal(put(increment(3)))

        expect(putResult.next().done).to.be.true();
    })
})

describe('counter reducer', function() {
    it('should return initial state', function() {
        const result = reducer()
        expect(result).to.be.equal(0)
    })

    it('should increment', function() {
        let state = 5
        state = reducer(state, {type: 'INC', value: 1})
        expect(state).to.be.equal(6)
        state = reducer(state, {type: 'INC', value: 5})
        expect(state).to.be.equal(11)
        state = reducer(state, {type: 'DEC', value: 2})
        expect(state).to.be.equal(9)
    })

    it('should return the same state if no actions match', function() {
        let state = 0
        const result = reducer(state, {type: "UNKNOWN"})
        expect(result).to.be.equal(state)
    })
})