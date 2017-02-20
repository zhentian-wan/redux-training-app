import {createStore, applyMiddleware} from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers';
import createLogger from 'redux-logger';
import {fetchingTodoEpic, isFetchingEpic} from './effects';

export const configStore = (initialState) => {

    let middlewares = [];
    if(process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    const rootEpic = combineEpics(fetchingTodoEpic);
    const epicMiddleware = createEpicMiddleware(rootEpic);
    middlewares.push(epicMiddleware);

    return createStore(rootReducer,
                       initialState,
                       applyMiddleware(...middlewares));
};

