import React, { Component } from 'react';
import { VisibleTodoList, AddTodo } from './containers';
import {Footer} from './components';

export class TodoApp extends Component {

    render() {
        return (
            <section>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </section>
        );
    }
}