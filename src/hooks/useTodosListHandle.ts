import { useContext, FormEvent } from 'react';
import { Context } from '../context/context';
import { v4 as uuidv4 } from 'uuid';

const useTodosListHandle = () => {
  const { todosList, newTodoValue, setTodosList, setNewTodoValue } =
    useContext(Context);

  const addTodo = (event: FormEvent): void => {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      description: newTodoValue,
      isCompleted: false,
    };

    const updatedTodoList = [...todosList, newTodo];

    setTodosList(updatedTodoList);
    setNewTodoValue('');
  };

  const deleteTodo = (id: string): void => {
    const updatedTodoList = todosList.filter((todo) => todo.id !== id);

    setTodosList(updatedTodoList);
  };

  const toggleTodoStatus = (id: string): void => {
    const updatedTodoList = todosList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    setTodosList(updatedTodoList);
  };

  const isNotCompletedTodosExist = (): boolean => {
    return todosList.find(({ isCompleted }) => isCompleted === false)
      ? true
      : false;
  };

  const toggleAllTodosStatus = (): void => {
    const isAnyTodoNotCompleted = isNotCompletedTodosExist();

    if (isAnyTodoNotCompleted) {
      const updatedTodoList = todosList.map(
        (todo) => (todo = { ...todo, isCompleted: true })
      );

      setTodosList(updatedTodoList);
    } else {
      const updatedTodoList = todosList.map(
        (todo) => (todo = { ...todo, isCompleted: false })
      );

      setTodosList(updatedTodoList);
    }
  };

  return {
    addTodo,
    deleteTodo,
    isNotCompletedTodosExist,
    toggleTodoStatus,
    toggleAllTodosStatus,
  };
};

export { useTodosListHandle };
