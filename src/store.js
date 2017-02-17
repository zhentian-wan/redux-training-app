import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger';

export const configStore = (initialState) => {

    let middlewares = [];
    if(process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    return createStore(rootReducer,
                       initialState,
                       applyMiddleware(...middlewares));
};

