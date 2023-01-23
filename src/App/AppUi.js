import React, { useContext } from 'react';

import { TodoCounter } from '../components/TodoCounter';
import { TodoContext } from "../TodoContext/index";
import { TodoItem } from '../components/TodoItem';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoForm } from '../components/TodoForm';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../components/Modal';

import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

const AppUi = () => {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext)

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList >
        {error && <TodosError error={error}/>}
        {loading && <TodosLoading loading={loading}/>}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal >
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  )
}

export { AppUi };