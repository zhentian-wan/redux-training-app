import {TodosModel} from '../todos.model';

describe('Todos Model tests', () => {
    let todos;
    beforeEach(() => {
        todos = [
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
    });
   it('should filter todos according to the selected filter: SHOW_ALL', () => {
       const selectedFilter = 'SHOW_ALL';
       const result = TodosModel.getVisibleTodos(selectedFilter, todos);
       const expected = todos;
       expect(result).toEqual(expected);
   });

   it('should filter todos according to "completed" fitler', () => {
       const selectedFilter = 'completed';
       const result = TodosModel.getVisibleTodos(selectedFilter, todos);
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
      const result = TodosModel.getVisibleTodos(selectedFilter, todos);
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
       const result = TodosModel.getVisibleTodos(selectedFilter, todos);
       const expected = todos;
       expect(result).toEqual(expected);
   });
});