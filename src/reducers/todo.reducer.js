
const toggleTodo = (state, action) => {
    if(action.payload.id !== state.id) {
        return state;
    }
    return {
        ...state,
        completed: !state.completed
    }
};

/*
* Reducer should use default export; selectors can use named export
* */
const todoReducer = (state = {}, action) => {
    switch(action.type){
        case 'ADD_TODO_SUCCESS':
            return {
                id: action.payload.id,
                name: action.payload.name,
                completed: false
            };
        case 'TOGGLE_TODO':
            return toggleTodo(state, action);
        default:
            return state;
    }
};

export default todoReducer;