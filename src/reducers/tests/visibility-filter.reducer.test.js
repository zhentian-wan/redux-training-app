import {VisibilityFilterReducer} from '../visbility-filter.reducer';

describe('Visibility filter tests', () => {
   it('should return default state', () => {
        const action = {
            type: 'WHATEVER',
            payload: '123'
        };
        const result = VisibilityFilterReducer(undefined, action);
        const expected = 'SHOW_ALL';
        expect(result).toEqual(expected);
   });

   it('should set visibility filter', () => {
        const action = {
            type: 'SET_VISIBILITY_FILTER',
            payload: {
                filter: 'SHOW_COMPLETED'
            }
        } ;
        const result = VisibilityFilterReducer('SHOW_ALL', action);
        const expected = 'SHOW_COMPLETED';
        expect(result).toEqual(expected);
   });
});