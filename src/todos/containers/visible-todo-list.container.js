import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { TodoList } from '../components';
import { toggleTodoAction, fetchingTodosAction, cancelRequestAction } from '../../actions'
import { getVisibleTodos, isFetchingTodos, getErrorMessage  } from '../../reducers';
import {FetchError} from '../components/fetchError';

export class VisibleTodoList extends Component {
    componentDidMount() {
        this.fetchTodos();
    }

    componentDidUpdate(prevProps) {
        if (this.props.params.filter !== prevProps.params.filter) {
            this.fetchTodos();
        }
    }

    fetchTodos = () => {
        const { params: { filter = 'all' }, fetchingTodos } = this.props;
        fetchingTodos(filter);
    };

    onCancelClick = (e) => {
        e.preventDefault();
        const { cancelRequest } = this.props;
        cancelRequest();
    };

    onReloadClick = (e) => {
        e.preventDefault();
        this.fetchTodos();
    };

    render() {
        const { isFetching, todos, errorMessage } = this.props;
        if (isFetching && !todos.length) {
            return (
                <div>
                    Loading...
                    <button onClick={this.onCancelClick}>Cancel</button>
                </div>
            );
        }

        if(errorMessage && !todos.length) {
            return (
                <FetchError
                    message={errorMessage}
                    onRetry={this.fetchTodos}
                />
            );
        }

        return (
            <section className="todo-list">
                <TodoList
                    {...this.props}
                />

                <button onClick={this.onReloadClick}>Reload</button>
            </section>
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
const mapStateToProps = (state, { params: {filter = 'all'} }) => ({
        todos: getVisibleTodos(filter, state),
        errorMessage: getErrorMessage(filter, state),
        isFetching: isFetchingTodos(state, filter)
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
    {
        onTodoClick: toggleTodoAction,
        fetchingTodos: fetchingTodosAction,
        cancelRequest: cancelRequestAction
    }
)(VisibleTodoList));