import React from 'react';
import { useSelector } from 'react-redux';
import { todoState } from '../../../redux/todoReducer';

export const TodoListItem: React.FC = () => {
	const todos = useSelector<todoState, todoState['todos']>(
		(state) => state.todos
	);

	return (
		<ul>
			{todos.map((todo, id) => {
				return <li key={id}>{todo}</li>;
			})}
		</ul>
	);
};
