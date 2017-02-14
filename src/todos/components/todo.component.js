import React from 'react';

export const Todo = ({completed, name, onClick}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration:
                completed ?
                'line-through' :
                'none'
        }}>{name}</li>
);