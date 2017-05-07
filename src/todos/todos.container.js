import React, { Component } from 'react';
import { VisibleTodoList, AddTodo } from './containers';
import {Footer} from './components';

export class TodoApp extends Component {

    render() {
        return (
            <section className="todo-app">
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </section>
        );
    }
}