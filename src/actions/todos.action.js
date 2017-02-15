import { store } from '../store';

let nextTodoId = 0;
export const addTodoAction = (input) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: nextTodoId++,
            name: input
        }
    };
};

export const toggleTodoAction = (id) => {
    return {
        type: 'TOGGLE_TODO',
        payload: id
    };
};

export const setVisibilityFilterAction = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        payload: {
            filter
        }
    };
};