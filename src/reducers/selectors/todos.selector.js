
const getVisibleTodos = (selectedFilter, todos) => {
    const allTodos = _getAllTodos(todos);
    switch(selectedFilter) {
        case 'all':
            return allTodos;
        case 'completed':
            return _showCompleted(allTodos);
        case 'open':
            return _showInCompleted(allTodos);
        default:
            return todos;
    }
};

function _getAllTodos(todos) {
    return todos.allIds.map(id => todos.byId[id]);
}

function _showCompleted(todos) {
    return todos.filter(todo => todo.completed)
}

function _showInCompleted(todos) {
    return todos.filter(todo => !todo.completed)
}

export const TodosSelector = {
    getVisibleTodos: (filter, state) => getVisibleTodos(filter, state.todos)
};