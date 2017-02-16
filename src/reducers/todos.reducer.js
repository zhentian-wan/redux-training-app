import todoReducer from './todo.reducer';
import {TodosSelector} from './selectors'

const todosReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                todoReducer(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(
                t => todoReducer(t, action)
            );
        default:
            return state;
    }
};

export default todosReducer;