import { Observable } from 'rxjs';

const baseURL = 'http://localhost:3333';
let shouldError = false;
let callCount = 1;
export const getTodosAPI = (filter) => {
    callCount++;
    if (shouldError && callCount % 2 === 0) {
        return Observable.throw({
                                    xhr: {
                                        response: {
                                            message: 'CANNOT FETCH TODOS'
                                        }
                                    }
                                })
                         .materialize()
                         .delay(1000)
                         .dematerialize()
    } else {
        return Observable.ajax(`${baseURL}/${filter}`)
                         .delay(1000)
                         .map(data => data.response);
    }
};

export const addTodoAPI = ({ id, name }) => {
    /*Call api twice for json-server hack*/
    return Observable.ajax({
                               method: 'POST',
                               url: `${baseURL}/all`,
                               body: {
                                   id,
                                   name,
                                   completed: false
                               }
                           })
                     .switchMap(() => Observable.ajax({
                                                          method: 'POST',
                                                          url: `${baseURL}/open`,
                                                          body: {
                                                              id,
                                                              name,
                                                              completed: false
                                                          }
                                                      }))
                     .map((data) => data.response);
};

