import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import promiseMiddleware from '../middleware/promiseMiddleware';

export default function initStore(initialState) {
    const enhancer = compose(applyMiddleware(promiseMiddleware));

    const store = createStore(reducers, initialState, enhancer);

    return store;
}