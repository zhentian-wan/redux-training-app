import {store} from '../../store';
import {addTodoAction, toggleTodoAction, setVisibilityFilterAction} from '../todos.action';


describe('Todos Actions test', () => {
    it('should initialize', () => {
        const actual = store.getState();
        const expected = {
            visibilityFilter: 'SHOW_ALL',
            todos: []
        };
        expect(actual).toEqual(expected);
    });

    it('should work with serials actions', () => {
        let actions = [
            addTodoAction('redux', 1),
            addTodoAction('react', 2),
            toggleTodoAction(2),
            setVisibilityFilterAction('SHOW_OPEN'),
            toggleTodoAction(2)
        ];
        actions.forEach(action => store.dispatch(action));
        const result = store.getState();
        const expected = {
            visibilityFilter: 'SHOW_OPEN',
            todos: [
                {
                    id: 1,
                    name: 'redux',
                    completed: false
                },
                {
                    id: 2,
                    name: 'react',
                    completed: false
                }
            ]
        };
        expect(result).toEqual(expected);
    });
});
