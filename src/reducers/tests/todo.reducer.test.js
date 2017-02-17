import todoReducer from '../todo.reducer';

describe('Todo Reducer tests', () => {

    test('it should return original state if type is not match any case', () => {
        const payload = {
            id: 0,
            name: "redux"
        };
        const result = todoReducer(undefined, {type: 'WHATEVER', payload});
        const expected = {};
        expect(result).toEqual(expected);
    });

    test('it should calculate next state for ADD_TODO', () => {
        const payload = {
            id: 0,
            name: "redux"
        };
        const result = todoReducer(undefined, {type: 'ADD_TODO', payload});
        const expected = {
            id: 0,
            name: "redux",
            completed: false
        };
        expect(result).toEqual(expected);
    });

    test('TOGGLE_TODO', () => {
        const preState = {
            id: 0,
            name: 'react',
            completed: true
        };
        const payload = {
            id: 0
        };
        const result = todoReducer(preState, {type: 'TOGGLE_TODO', payload});
        const expected = {
            id: 0,
            name: 'react',
            completed: false
        };
        expect(result).toEqual(expected);
    })
});