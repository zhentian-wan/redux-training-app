import React from 'react';

export const AddTodo = () => {
    let input;
    return (
        <div>
            <input type="text" ref={node => input = node}/>
            <button>Add todo</button>
        </div>
    );
};