import {TodosSelector} from '../todos.selector';
import {configStore} from '../../../store';

describe('Todos Model tests', () => {
    let state;
    beforeEach(() => {
        const todos = [
            {
                id: 0,
                name: 'react',
                completed: false
            },
            {
                id: 1,
                name: 'angular',
                completed: false
            },
            {
                id: 2,
                name: 'vue',
                completed: true
            }

        ];
        const store = configStore({todos});
        state = store.getState();
    });
   it('should filter todos according to the selected filter: SHOW_ALL', () => {
       const selectedFilter = 'SHOW_ALL';
       const result = TodosSelector.getVisibleTodos(selectedFilter, state);
       const expected = state.todos;
       expect(result).toEqual(expected);
   });

   it('should filter todos according to "completed" fitler', () => {
       const selectedFilter = 'completed';
       const result = TodosSelector.getVisibleTodos(selectedFilter, state);
       const expected = [
           {
               id: 2,
               name: 'vue',
               completed: true
           }
       ];
       expect(result).toEqual(expected);
   });

   it('should filter todos according to "open" filter', () => {
      const selectedFilter = 'open';
      const result = TodosSelector.getVisibleTodos(selectedFilter, state);
      const expected = [
          {
              id: 0,
              name: 'react',
              completed: false
          },
          {
              id: 1,
              name: 'angular',
              completed: false
          }
      ];
      expect(result).toEqual(expected);
   });

   it('should return all todos if action type is not match any case', () => {
       const selectedFilter = 'SHOW_SOMETHING';
       const result = TodosSelector.getVisibleTodos(selectedFilter, state);
       const expected = state.todos;
       expect(result).toEqual(expected);
   });
});