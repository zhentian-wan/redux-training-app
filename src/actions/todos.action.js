import { store } from '../store';
import { v4 } from 'node-uuid';

export const addTodoAction = (input, id) => ({
    type: 'ADD_TODO',
    payload: {
        id: id ?
            id :
            v4(),
        name: input
    }
});

export const toggleTodoAction = (id) => ({
    type: 'TOGGLE_TODO',
    payload: {
        id
    }
});

export const setVisibilityFilterAction = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    payload: {
        filter
    }
});

export const fetchingTodosAction = (filter) => ({
    type: 'FETCHING_TODOS',
    payload: {
        filter
    }
});
export const fetchingTodoSuccessAction = (response, filter) => ({
    type: 'FETCHING_TODOS_SUCCESS',
    payload: {
        response,
        filter
    }
});
export const fetchingTodoFaildAction = (error, filter) => ({
    type: 'FETCHING_TODOS_FAILD',
    payload: {
        error,
        filter
    }
});

export const cancelRequestAction = () => ({
    type: 'CANCEL_REQUEST'
});