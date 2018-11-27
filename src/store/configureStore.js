import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import promiseMiddleware from '../middlewares/promiseMiddleware';

export default function(initialState) {
    const enhancer = compose(applyMiddleware(promiseMiddleware));

    const store = createStore(reducers, initialState, enhancer);

    return store;
}