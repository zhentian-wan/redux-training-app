import React from 'react';

export const TodoList = ({todos}) => {
    const list = todos.map(
        todo => <li key={todo.id}>{todo.name}</li>
    );
    return (
        <ul>
            {list}
        </ul>
    );
};