import { Observable } from 'rxjs';

const baseURL = 'http://localhost:3333';

let callCount = 1;
export const getTodosAPI = (filter) => {
    callCount++;
    if (callCount % 2 === 0) {
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
                         .map(data => data.response);
    }
};

