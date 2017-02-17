import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { TodoList } from '../components';
import { toggleTodoAction } from '../../actions'
import {TodosSelector} from '../../reducers';

export class VisibleTodoList extends Component {
    componentDidMount() {

    }

    componentWillUpdate(preProps, nextProps) {

    }

    render() {
        return (
            <TodoList
                {...this.props}
            />
        );
    }
}

/**
 * Problem for this mapStateToProps:
 * it using state.todos as param. So actually it depends on
 * the state's shape. If next time, we change 'todos' to 'tasks',
 * we have to update this function call also.
 *
 * So what we want is just pass in state, and using 'selector' to
 * help.
 *
 *
 * const mapStateToProps = (state, {params}) => ({
    todos: TodosSelector.getVisibleTodos(params.filter, state.todos)
   });
 *
 * */
// By using withRouter, we get router's params injected into our function
const mapStateToProps = (state, {params}) => ({
    todos: TodosSelector.getVisibleTodos(params.filter, state)
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
/*
export const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    {onTodoClick: toggleTodoAction}
)(TodoList));
*/

VisibleTodoList = withRouter(connect(
    mapStateToProps,
    {onTodoClick: toggleTodoAction}
)(VisibleTodoList));