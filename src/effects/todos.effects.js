import * as API from '../api';
import {Observable} from 'rxjs';

import { fetchingTodoSuccessAction, fetchingTodoFaildAction } from '../actions';

export const fetchingTodoEpic = action$ =>
    action$.ofType('FETCHING_TODOS')
           .switchMap((action) => {
               return API.getTodosAPI(action.payload.filter)
                         .map(response =>
                                  fetchingTodoSuccessAction(response, action.payload.filter))
                         .takeUntil(action$.ofType('CANCEL_REQUEST'))
                         .catch((err) => Observable.of(fetchingTodoFaildAction(err)));
           });
