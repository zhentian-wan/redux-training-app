import React, { Component } from 'react';
import { VisibleTodoList } from './containers';
import {AddTodo} from './containers';

let nextTodoId = 0;

export class TodoApp extends Component {

    render() {
        return (
            <section>
                <AddTodo />
                <VisibleTodoList />
            </section>
        );
    }
}