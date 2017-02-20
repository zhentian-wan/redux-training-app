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

const byId = (state = {}, action) => {
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
};

export default byId;

export const getTodo = (state, id) => state[id];