import { combineEpics, createEpicMiddleware } from 'redux-observable';

import {fetchingTodoEpic, addTodoEpic} from './todos.effects';

const rootEpic = combineEpics(fetchingTodoEpic, addTodoEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);

export default epicMiddleware;