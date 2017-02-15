
const getVisibleTodos = (selectedFilter, todos) => {
    switch(selectedFilter) {
        case 'SHOW_ALL':
            return _showAll(todos);
        case 'SHOW_COMPLETED':
            return _showCompleted(todos);
        case 'SHOW_OPEN':
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