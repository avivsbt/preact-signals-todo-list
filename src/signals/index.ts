import { IError, ITodo, ITodosReqDto } from '../types';
import { signal } from '@preact/signals';

export const todos = signal<ITodo[]>([]);

export async function getTodos(): Promise<ITodosReqDto | IError> {
  try {
    const todoApi = await fetch('https://dummyjson.com/todos?limit=3');
    const response = await todoApi.json();
    return response.todos;
  } catch (error) {
    return error;
  }
}
