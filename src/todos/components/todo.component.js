import React from 'react';

import ReactCssTransitionGroup from 'react-addons-css-transition-group';

export const Todo = ({completed, id, name, onClick}) => (
    <ReactCssTransitionGroup
        key={id}
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
    >
    <li
        onClick={onClick}
        className={
            completed ?
                "todo-list__item--completed" :
                "todo-list__item--active"
        }>{name}</li>
    </ReactCssTransitionGroup>
);