import { store } from '../store';

let nextTodoId = 0;
export const addTodoAction = (input) => {
    store.dispatch({
                       type: 'ADD_TODO',
                       payload: {
                           id: nextTodoId++,
                           name: input
                       }
                   });
};

export const toggleTodoAction = (id) => {
    store.dispatch({
                       type: 'TOGGLE_TODO',
                       payload: id
                   });
};

export const setVisibilityFilterAction = (filter) => {
    store.dispatch({
                       type: 'SET_VISIBILITY_FILTER',
                       payload: {
                           filter
                       }
                   });
};