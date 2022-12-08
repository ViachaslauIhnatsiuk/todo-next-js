import { useContext, FormEvent } from 'react';
import { Context } from '../context/context';

const useTodosListHandle = () => {
  const { todosList, newTodoValue, setTodosList, setNewTodoValue } =
    useContext(Context);

  const addTodo = (event: FormEvent): void => {
    event.preventDefault();

    const newTodo = {
      id: todosList.length + 1,
      description: newTodoValue,
      isCompleted: false,
    };

    const updatedTodoList = [...todosList, newTodo];

    setTodosList(updatedTodoList);
    setNewTodoValue('');
  };

  const deleteTodo = (id: number): void => {
    const updatedTodoList = todosList.filter((todo) => todo.id !== id);

    setTodosList(updatedTodoList);
  };

  const toggleTodoStatus = (id: number): void => {
    const updatedTodoList = todosList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    setTodosList(updatedTodoList);
  };

  const toggleAllTodosStatus = (): void => {
    const isAnyTodoCompleted = todosList.find(
      ({ isCompleted }) => isCompleted === false
    );

    if (isAnyTodoCompleted) {
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
    toggleTodoStatus,
    toggleAllTodosStatus,
  };
};

export { useTodosListHandle };
