import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { TodoList } from '../components';
import { toggleTodoAction } from '../../actions'

import { TodosModel } from '../models';

const mapStateToProps = (state, {params}) => ({
    todos: TodosModel.getVisibleTodos(params.filter, state.todos)
});

/*
* This mapDispatchToProps can use shorthand syntax since
* 'onTodoClick' & 'toggleTodoAction' both accept one agreement 'id'
* */
/*
const mapDispatchToProps = (dispatch) => ({
    onTodoClick: (id) => dispatch(toggleTodoAction(id))
});*(

/*
* VisibleTodoList: Will be the container component to render TodoList presentational component.
*
* TodoList: The presentational component to render the todos
*
* mapStateToProps: using connect to pass redux state ('todos'), make it available to TodoList component
*
* mapDispatchToProps: using connect to pass callback to make it available to TodoList component
* */
export const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    {onTodoClick: toggleTodoAction}
)(TodoList));