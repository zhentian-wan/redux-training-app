import {store} from '../../store';


describe('Todos Actions test', () => {

   let actions;
   beforeEach(() => {
       actions = [
           _addTodo('redux', 0),
           _addTodo('react', 1),
           _toggleTodo(1),
           _setVisibilityFilter('SHOW_OPEN'),
           _toggleTodo(1)
       ];
   });

    it('should initialize', () => {
        const actual = store.getState();
        const expected = {
            visibilityFilter: 'SHOW_ALL',
            todos: []
        };
        expect(actual).toEqual(expected);
    });

    it('should work with serials actions', () => {
        actions.forEach(action => store.dispatch(action));
        const result = store.getState();
        const expected = {
            visibilityFilter: 'SHOW_OPEN',
            todos: [
                {
                    id: 0,
                    name: 'redux',
                    completed: false
                },
                {
                    id: 1,
                    name: 'react',
                    completed: false
                }
            ]
        };
        expect(result).toEqual(expected);
    });
});


function _addTodo(name, id) {
    return {
        type: 'ADD_TODO',
        payload: {
            id,
            name
        }
    }
}

function _toggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        payload: id
    }
}

function _setVisibilityFilter(filter) {
    return {
        type: 'SET_VISIBILITY_FILTER',
        payload: {
            filter
        }
    };
}