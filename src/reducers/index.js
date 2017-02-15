import {combineReducers} from 'redux';

import {todosReducer} from './todos.reducer';
import {VisibilityFilterReducer} from './visbility-filter.reducer';

export const rootReducer = combineReducers({
    todos: todosReducer,
    visibilityFilter: VisibilityFilterReducer
});