import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger';
import epicMiddleware from './effects';

export const configStore = (initialState) => {

    let middlewares = [];
    if(process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    middlewares.push(epicMiddleware);

    return createStore(rootReducer,
                       initialState,
                       applyMiddleware(...middlewares));
};

