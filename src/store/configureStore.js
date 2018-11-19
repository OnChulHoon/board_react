import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import promiseMiddleware from '../middleware/promiseMiddleware';

export default function(initialState) {
    const enhancer = compose(applyMiddleware(promiseMiddleware));
    return createStore(reducers, initialState, enhancer);
}