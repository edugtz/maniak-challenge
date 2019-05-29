import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const initialState = {};

const composeEnhancers = process.env.NODE_ENV !== 'production' && window ? 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        logger,
        thunkMiddleware
    )
);

const rootReducer = (state, action) => {
    return state;
}

const store = createStore(
    // combineReducers({}),
    rootReducer,
    initialState,
    enhancer
);

export default store;

