import React, { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'


const TodoContext = createContext();

const TodoProvider = (props) => {

	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error
	} = useLocalStorage('TODOS_V1', []);
	// const [patito, savePatito] = useLocalStorage('PATITOS_V1', 'nombre por defecto');
	// const [name, saveName] = useLocalStorage('NOMBREULTRAIMPORTANTE', '');
	const [openModal, setOpenModal] = useState(false);

	const [searchValue, setSearchValue] = useState('');

	const completedTodos = todos.filter(todo => !!todo.completed).length;
	const totalTodos = todos.length;

	let searchedTodos = [];

	if (!searchValue.length >= 1) {
		searchedTodos = todos;
	} else {
		searchedTodos = todos.filter(todo => {
			const todoText = todo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return todoText.includes(searchText);
		});
	}

	const addTodo = (text) => {
		const newTodos = [...todos];
		newTodos.push({
			completed: false,
			text,
		});
		saveTodos(newTodos);
	}
	const completeTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos[todoIndex].completed = true;
		saveTodos(newTodos);
	}

	const deleteTodo = (text) => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
	}

	return (
		<TodoContext.Provider value={{
			error,
			loading,
			totalTodos,
			completedTodos,
			searchValue,
			setSearchValue,
			searchedTodos,
			addTodo,
			completeTodo,
			deleteTodo,
			openModal,
			setOpenModal,

		}} >
			{props.children}
		</TodoContext.Provider>
	)
}

export { TodoContext, TodoProvider };