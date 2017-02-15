import React from 'react';
import {connect} from 'react-redux';
import {TodoList} from '../components';
import {toggleTodoAction} from '../../actions'

import {TodosModel} from '../models';

const mapStateToProps = (state) => {
    return {
        todos: TodosModel.getVisibleTodos(state.visibilityFilter, state.todos)
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
      onTodoClick: (id) => dispatch(toggleTodoAction(id))
  };
};

/*
* VisibleTodoList: Will be the container component to render TodoList presentational component.
*
* TodoList: The presentational component to render the todos
*
* mapStateToProps: using connect to pass redux state ('todos'), make it available to TodoList component
*
* mapDispatchToProps: using connect to pass callback to make it available to TodoList component
* */
export const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);