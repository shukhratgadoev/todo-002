import React from 'react';
import { useDispatch } from 'react-redux';
import { AddTodoForm } from './components/AddTodoForm/AddTodoForm';
import { addTodo } from './redux/action';
import { TodoList } from './components/AddTodoForm/TodoList/TodoList';

function App() {
	const dispatch = useDispatch();

	const onAddTodo = (todo: string) => {
		todo.trim() !== '' && dispatch(addTodo(todo));
	};

	return (
		<React.Fragment>
			<AddTodoForm addTodo={onAddTodo} />
			<hr />
			<TodoList />
		</React.Fragment>
	);
}

export default App;
