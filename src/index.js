import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, Redirect} from 'react-router';
import {App} from './App';
import './index.css';

import {configStore} from './store';
const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/(:filter)" component={App}></Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);