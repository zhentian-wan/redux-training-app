import {createStore} from 'redux';
import rootReducer from './reducers';

export const configStore = (initialState) => {
    return createStore(rootReducer, initialState);
};

