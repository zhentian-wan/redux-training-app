import * as API from '../api';
import {
    fetchingTodoSuccessAction,
    fetchingTodoFaildAction,
    addTodoSuccessAction
} from '../actions';

export const fetchingTodoEpic = action$ =>
    action$.ofType('FETCHING_TODOS')
           .switchMap((action) => {
               return API.getTodosAPI(action.payload.filter)
                         .map((response) =>
                                  fetchingTodoSuccessAction(response, action.payload.filter))
                         .takeUntil(action$.ofType('CANCEL_REQUEST'))
                         .catch(err =>
                                    fetchingTodoFaildAction(err, action.payload.filter)
                         );
           });

export const addTodoEpic = action$ =>
    action$.ofType('ADD_TODO')
        .switchMap((action) => API.addTodoAPI(action.payload))
        .map((response) => addTodoSuccessAction(response));