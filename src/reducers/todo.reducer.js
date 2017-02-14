
const toggleTodo = (state, action) => {
    if(action.payload !== state.id) {
        return state;
    }
    return {
        ...state,
        completed: !state.completed
    }
};


export const todoReducer = (state = {}, action) => {
    switch(action.type){
        case 'ADD_TODO':
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