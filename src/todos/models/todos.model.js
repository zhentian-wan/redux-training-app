
const getVisibleTodos = (selectedFilter, todos) => {
    switch(selectedFilter) {
        case 'all':
            return _showAll(todos);
        case 'completed':
            return _showCompleted(todos);
        case 'open':
            return _showInCompleted(todos);
        default:
            return todos;
    }
};

function _showAll(todos) {
    return todos;
}

function _showCompleted(todos) {
    return todos.filter(todo => todo.completed)
}

function _showInCompleted(todos) {
    return todos.filter(todo => !todo.completed)
}

export const TodosModel = {
    getVisibleTodos
};