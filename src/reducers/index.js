import {combineReducers} from 'redux';
import todosReducer from './todos.reducer';
import uiState from './ui.reducer';

const rootReducer = combineReducers({
    todos: todosReducer,
    uiState: uiState
});

export default rootReducer;

export {getVisibleTodos, isFetchingTodos} from './todos.reducer';