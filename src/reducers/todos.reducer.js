import { combineReducers } from 'redux';
/*
*  Problem: Currently we make todos state as array.
*  But in real app, it is more object like.
*
*  Solution: switch todos state from Array to Object
*  and see this change won't affect component, because
*  all the state shape logic are in the reducer and selector.
* */
const byId = (state = {}, action) => {
    switch( action.type ) {
        case 'FETCHING_TODOS_SUCCESS':
            const nextState = { ...state };
            action.payload.response.forEach(todo => {
                nextState[todo.id] = todo;
            });
            return nextState;
        default:
            return state;
    }
};

const allIds = (state = [], action) => {
    if (action.payload && action.payload.filter !== 'all') {
        return state;
    }
    switch( action.type ) {
        case 'FETCHING_TODOS_SUCCESS':
            return action.payload.response.map(todo => todo.id);
        default:
            return state;
    }
};

const completedIds = (state = [], action) => {
    if (action.payload && action.payload.filter !== 'completed') {
        return state;
    }
    switch( action.type ) {
        case 'FETCHING_TODOS_SUCCESS':
            return action.payload.response.map(todo => todo.id);
        default:
            return state;
    }
};
const openIds = (state = [], action) => {
    if (action.payload && action.payload.filter !== 'open') {
        return state;
    }
    switch( action.type ) {
        case 'FETCHING_TODOS_SUCCESS':
            return action.payload.response.map(todo => todo.id);
        default:
            return state;
    }
};

const idsByFilter = combineReducers({
                                        open: openIds,
                                        completed: completedIds,
                                        all: allIds
                                    });

const todosReducer = combineReducers({
                                         byId,
                                         idsByFilter
                                     });

export default todosReducer;

/*
* Selectors
* */
export const getVisibleTodos = (filter, state) => {
    console.log("state:", state);
    console.log("filter:", filter);
    const ids = state.todos.idsByFilter[filter];
    return ids.map(id => state.todos.byId[id]);
};