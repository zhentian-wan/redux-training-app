import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {addTodoAction} from '../../actions'

export let AddTodo = ({ dispatch, params }) => {
    let input;

    const onButtonClick = () => {
        dispatch(addTodoAction(input.value));
        input.value = "";
    };

    return (
        <div className="add-todo">
            <input
                className="add-todo__input"
                placeholder="New Todo"
                type="text"
                ref={node => input = node}/>
            <button
                className="add-todo__button"
                onClick={onButtonClick}
            >Add todo
            </button>
        </div>
    );
};

/*
AddTodo = connect(
    state => { return {}; },
    dispatch => ({ dispatch})
)(Add;Todo)
*/

/*
* Cause Context is not a stable API, we can avoid to using it.
* SO here we also use connect from 'react-redux'.
* We can reassign AddTodo = connect()(AddTodo);
* It will pass the dispatch function to AddTodo's props.
*
* In AddTodo Component, we don't need state, just need dispatch function.
* SO we can write:
* AddTodo = connect(
*   null,
*   dispatch => ({dispatch})
* )(AddTodo)
*
* And by default, connect function will link dispatch function to props,
* so it means we even don't need to pass the dispatch function
* SO we can write:
* AddTodo = connect(null, null)(AddTodo);
*
* In short, we can write:
* AddTodo = connect()(AddTodo);
* */

AddTodo = withRouter(connect()(AddTodo));