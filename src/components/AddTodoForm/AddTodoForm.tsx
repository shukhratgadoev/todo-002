import React, { ChangeEvent, FormEvent, useState } from 'react';

interface AddTodoFormProps {
	addTodo: (todo: string) => void;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
	const [todo, setTodo] = useState('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTodo(e.target.value);
	};

	const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		addTodo(todo);
		setTodo('');
	};

	return (
		<form>
			<input onChange={handleChange} value={todo} type='text' name='todo' />
			<button type='submit' onClick={handleSubmit}>
				Add Todo
			</button>
		</form>
	);
};
