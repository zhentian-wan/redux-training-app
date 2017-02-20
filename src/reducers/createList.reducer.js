
const createList = (filter) => {
    return (state = [], action) => {
        if (action.payload && action.payload.filter !== filter) {
            return state;
        }
        switch( action.type ) {
            case 'FETCHING_TODOS_SUCCESS':
                return action.payload.response.map(todo => todo.id);
            default:
                return state;
        }
    }
};

export default createList;

export const getIds = (state) => state;