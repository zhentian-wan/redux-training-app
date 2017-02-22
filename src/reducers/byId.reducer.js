import todoReducer from './todo.reducer';

/*
*  Problem: Currently we make todos state as array.
*  But in real app, it is more object like.
*
*  Solution: switch todos state from Array to Object
*  and see this change won't affect component, because
*  all the state shape logic are in the reducer and selector.
* */

// Generate {[id]: todoItem} pair

/*
*  Problem for current reducer:
*  Current reducer needs to handle different state data type.
*  For example, in FETCHING_TODOS_SUCCESS, we need to transform
*  array to todos into a an object.
*  And for ADD_TODO_SUCCESS, we need to add item into object.
*
*  Solution:
*  What we want is the same data response type.
*  So that we can simply our reducer.

    let nextState;
    switch( action.type ) {
        case 'FETCHING_TODOS_SUCCESS':
            nextState = { ...state };
            action.payload.response.forEach(todo => {
                nextState[todo.id] = todo;
            });
            return nextState;
        case 'ADD_TODO_SUCCESS':
            return {
                ...state,
                [action.payload.id]: todoReducer(state, action)
            };
        case 'TOGGLE_TODO':
            return Object.assign({}, state, {
                [action.payload.id]: todoReducer(getTodo(state, action.payload.id), action)
            });
        default:
            return state;
    }
* */
const byId = (state = {}, action) => {
    switch( action.type ) {
        case 'FETCHING_TODOS_SUCCESS':
        case 'ADD_TODO_SUCCESS':
            return {
                ...state,
                ...action.payload.response.entities.todos
            };
        case 'TOGGLE_TODO':
            return Object.assign({}, state, {
                [action.payload.id]: todoReducer(
                    getTodo(state, action.payload.id),
                    action
                )
            });
        default:
            return state;
    }
};

export default byId;

export const getTodo = (state, id) => state[id];