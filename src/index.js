import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {App} from './App';
import './index.css';

import {createStore} from 'redux';
import {rootReducer} from './reducers';

const store = createStore(rootReducer, {
    todos: [
        {
            id: 0,
            name: "redux",
            completed: false
        }
    ]
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);