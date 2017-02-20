import { combineReducers } from 'redux';

/*
* Redux does not enforce that you encapsulate the knowledge about the state
* shape in particular reducer files.
* However, it's a nice pattern,
* because it lets you change the state that is stored by reducers
* without having to change your components or your tests
* if you use selectors together with reducers in your tests.
* */

const createList = (filter) => {
    const ids = (state = [], action) => {
        if (action.payload && action.payload.filter !== filter) {
            return state;
        }
        switch( action.type ) {
            case 'FETCHING_TODOS_SUCCESS':
                return action.payload.response.map(todo => todo.id);
            default:
                return state;
        }
    };

    const isFetching = (state = false, action) => {
        if (action.payload && action.payload.filter !== filter) {
            return state;
        }
        switch( action.type ) {
            case 'FETCHING_TODOS_SUCCESS':
                return false;
            case 'FETCHING_TODOS_FAILD':
                return false;
            case 'FETCHING_TODOS':
                return true;
            default:
                return state;
        }
    };

    return combineReducers({
                               ids,
                               isFetching
                           })
};

export default createList;

export const getIds = (state) => state.ids;
export const isFetchingTodos = (state) => state.isFetching;