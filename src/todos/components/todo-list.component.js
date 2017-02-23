import React from 'react';
import {Todo} from './todo.component';

export const TodoList = ({todos, onTodoClick}) => {
    const list = todos.map(
        todo => (

            <Todo
                {...todo}
                key={todo.id}
                onClick={() => onTodoClick(todo.id)}>
            </Todo>

        )
    );
    return (
        <ul>
            {list}
        </ul>
    );
};