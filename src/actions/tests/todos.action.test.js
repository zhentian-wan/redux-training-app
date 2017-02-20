import { configStore } from '../../store';
import { addTodoAction, toggleTodoAction, setVisibilityFilterAction } from '../todos.action';

describe('Todos Actions test', () => {
    let store;
    beforeEach(() => {
        store = configStore();
    });

    it('should initialize', () => {

    });

    it('should work with serials actions', () => {
        let actions = [
            addTodoAction('redux', 1),
            addTodoAction('react', 2),
            toggleTodoAction(2),
            // setVisibilityFilterAction('SHOW_OPEN'),
            toggleTodoAction(2)
        ];
    });
});
