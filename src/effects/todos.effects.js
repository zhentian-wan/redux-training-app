import * as API from '../api';
import { fetchingTodoSuccessAction, fetchingTodoFaildAction } from '../actions';

export const fetchingTodoEpic = action$ =>
    action$.ofType('FETCHING_TODOS')
           .switchMap((action) => {
               return API.getTodosAPI(action.payload.filter)
                         .map(response =>
                                  fetchingTodoSuccessAction(response, action.payload.filter))
                         .catch(err =>
                                    fetchingTodoFaildAction(err, action.payload.filter)
                         );
           });
