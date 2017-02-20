import {Observable} from 'rxjs';

const baseURL = 'http://localhost:3333';

export const getTodosAPI = (filter) => {
    return Observable.ajax(`${baseURL}/${filter}`)
        .map(data => data.response);
};

