import { Action } from './action';

export interface todoState {
	todos: string[];
}

const InitialState = {
	todos: [],
};

export const todoReducer = (
	state: todoState = InitialState,
	action: Action
) => {
	switch (action.type) {
		case 'ADD_TODO': {
			return { ...state, todos: [...state.todos, action.payload] };
		}
		default:
			return state;
	}
};
