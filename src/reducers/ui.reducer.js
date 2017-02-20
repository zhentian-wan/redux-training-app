const uiState = (state = {}, action) => {
    switch(action.type) {
        case 'FETCHING_TODOS_FAILD':
            var nextState = {...state};
            nextState = Object.assign({}, nextState.uiState, {
                error: true,
                message: action.payload.message
            });
            return nextState;
        case 'FETCHING_TODOS_SUCCESS':
            var nextState = {...state};
            nextState = Object.assign({}, nextState.uiState, {
                error: false,
                message: null
            });
            return nextState;
        default:
            return state;
    }
};

export default uiState;