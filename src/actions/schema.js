import {schema} from 'normalizr';

export const todoSchema = new schema.Entity('todos');
export const arrayOfTodosSchema = new schema.Array(todoSchema);