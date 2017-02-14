import {todosReducer} from '../todos.reducer';

describe('Test Todos reducer', () => {
   test('should have initial state defined', () => {

       const result = todosReducer(undefined, {type: 'WHATEVER', payload: '123'});
       const expected = [];
       expect(result).toEqual(expected);
   });

    describe('ADD_TODO', () => {
        test('Should add new todo into the state', () => {
            const payload = {
                id: 1,
                name: 'react'
            };
            const result = todosReducer(undefined, {type: 'ADD_TODO', payload});
            const expected = [
                {
                    id: 1,
                    name: 'react',
                    completed: false
                }
            ];
            expect(result).toEqual(expected);
        });

        test('Should add new todo into the state if there is state defined', () => {
            const payload = {
                id: 1,
                name: 'react'
            };
            const state = [
                {
                    id: 0,
                    name: 'redux',
                    completed: true
                }
            ];
            const result = todosReducer(state, {type: 'ADD_TODO', payload});
            const expected = [
                {
                    id: 0,
                    name: 'redux',
                    completed: true
                },
                {
                    id: 1,
                    name: 'react',
                    completed: false
                }
            ];
            expect(result).toEqual(expected);
        });
    });

    describe('TOGGLE_TODO', () => {
       test('it should toggle the completed prop', () => {
           const preState = [
               {
                   id: 0,
                   name: "redux",
                   completed: false
               }
           ];
           const payload = 0;
           const result = todosReducer(preState, {type: 'TOGGLE_TODO', payload});
           const expected = [
               {
                   id: 0,
                   name: "redux",
                   completed: true
               }
           ];
           expect(result).toEqual(expected);
       })
    });
});