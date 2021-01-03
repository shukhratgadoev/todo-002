export type Action = { type: 'ADD_TODO'; payload: string };

export const addTodo = (todo: string): Action => ({
	type: 'ADD_TODO',
	payload: todo,
});
