import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import testimonialReducer from './reducers/testimonialReducer';
import configuratorReducer from './reducers/configuratorReducer';

const composeEnhancers = process.env.NODE_ENV !== 'production' && window ? 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        thunkMiddleware
    )
);

const rootReducer = combineReducers({
    configurator: configuratorReducer,
    testimonial: testimonialReducer
});


const store = createStore(
    rootReducer,
    enhancer
);

export default store;

