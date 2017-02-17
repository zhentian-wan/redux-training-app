import { configStore } from '../../store';
import { addTodoAction, toggleTodoAction, setVisibilityFilterAction } from '../todos.action';

describe('Todos Actions test', () => {
    let store;
    beforeEach(() => {
        store = configStore();
    });

    it('should initialize', () => {
        const actual = store.getState();
        const expected = {
            todos: {
                allIds: [],
                byId: {}
            }
        };
        expect(actual)
            .toEqual(expected);
    });

    it('should work with serials actions', () => {
        let actions = [
            addTodoAction('redux', 1),
            addTodoAction('react', 2),
            toggleTodoAction(2),
            // setVisibilityFilterAction('SHOW_OPEN'),
            toggleTodoAction(2)
        ];
        actions.forEach(action => store.dispatch(action));
        const result = store.getState();
        const expected = {
            todos: {
                allIds: [1 ,2],
                byId: {
                    "1": {
                        id: 1,
                        name: 'redux',
                        completed: false
                    },
                    "2": {
                        id: 2,
                        name: 'react',
                        completed: false
                    }
                }
            }
        };
        expect(result)
            .toEqual(expected);
    });
});
