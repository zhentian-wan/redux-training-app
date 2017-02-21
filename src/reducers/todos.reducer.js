import { combineReducers } from 'redux';
import byId, * as fromById from './byId.reducer';
import createList, * as fromList from './createList.reducer';

const listByFilter = combineReducers({
                                        open: createList('open'),
                                        completed: createList('completed'),
                                        all: createList('all')
                                    });

const todosReducer = combineReducers({
                                         byId,
                                         listByFilter
                                     });

export default todosReducer;

/*
* Selectors
* */
export const getVisibleTodos = (filter, state) => {
    const ids = fromList.getIds(state.todos.listByFilter[filter]);
    return ids.map(id => fromById.getTodo(state.todos.byId, id));
};

export const getErrorMessage = (filter, state) => {
    return fromList.getErrorMessage(state.todos.listByFilter[filter]);
};

export const isFetchingTodos = (state, filter) => {
    return fromList.isFetchingTodos(state.todos.listByFilter[filter]);
};