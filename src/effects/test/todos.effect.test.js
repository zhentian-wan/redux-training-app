import {ActionsObservable,} from 'redux-observable';
import expect from 'expect';
import {expectEpic} from 'redux-observable-test-helpers';

describe('Effect' , () => {

    it('should exist', () => {
        expect(ActionsObservable).toBeA('function');
    });

    it('should support ActionsObservable.of(...actions)', () => {
        const output = [];
        const action$ = ActionsObservable.of({ type: 'FIRST' }, { type: 'SECOND' });
        action$.subscribe(x => output.push(x));

        expect(output).toEqual([{ type: 'FIRST' }, { type: 'SECOND' }]);
    });
});