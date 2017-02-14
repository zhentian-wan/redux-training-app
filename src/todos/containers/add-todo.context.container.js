import React from 'react';

let nextTodoId = 0;

export const AddTodo = (props, { store }) => {
    let input;

    const onButtonClick = () => {
        store.dispatch({
                           type: 'ADD_TODO',
                           payload: {
                               id: nextTodoId++,
                               name: input.value
                           }
                       });
        input.value = "";
    };

    return (
        <div>
            <input type="text" ref={node => input = node}/>
            <button
                onClick={onButtonClick}
            >Add todo
            </button>
        </div>
    );
};

AddTodo.contextTypes = {
    store: React.PropTypes.object
};