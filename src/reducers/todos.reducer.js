import todoReducer from './todo.reducer';
import {combineReducers} from 'redux';

/*
*  Problem: Currently we make todos state as array.
*  But in real app, it is more object like.
*
*  Solution: switch todos state from Array to Object
*  and see this change won't affect component, because
*  all the state shape logic are in the reducer and selector.
* */
const byId = (state = {}, action) => {
    switch(action.type){
        case 'ADD_TODO':
        case 'TOGGLE_TODO':
            return {
                ...state,
                [action.payload.id]: todoReducer(state[action.payload.id], action)
            };
        default:
            return state;
    }
};

const allIds = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.payload.id
            ] ;
        default:
            return state;
    }
};

const todosReducer = combineReducers({
    byId,
    allIds
                               });

export default todosReducer;