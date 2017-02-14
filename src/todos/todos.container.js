import React, { Component } from 'react';
import { VisibleTodoList } from './containers';
import {AddTodo} from './containers';

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