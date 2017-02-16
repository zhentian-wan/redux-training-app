import {createStore} from 'redux';
import rootReducer from './reducers';

export const configStore = () => {
    return  createStore(rootReducer);
};

