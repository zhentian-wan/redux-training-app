import { store } from '../store';
import {v4} from 'node-uuid';

export const addTodoAction = (input, id) => ({
    type: 'ADD_TODO',
    payload: {
        id: id ? id: v4(),
        name: input
    }
});

export const toggleTodoAction = (id) => ({
    type: 'TOGGLE_TODO',
    payload: id
});

export const setVisibilityFilterAction = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    payload: {
        filter
    }
});