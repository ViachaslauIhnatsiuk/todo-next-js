import { useContext, MouseEvent } from 'react';
import { Context } from '../context/context';
import { ITodoItem } from '../models/todoItem.models';

const useTodosFilter = () => {
  const { todosList, statusFilterValue, setTodosList, setStatusFilterValue } =
    useContext(Context);

  const filterTodosByStatus = (todo: ITodoItem): boolean => {
    switch (statusFilterValue) {
      case 'active':
        return todo.isCompleted === false;
      case 'completed':
        return todo.isCompleted === true;
      default:
        return true;
    }
  };

  const showFilteredTodos = (event: MouseEvent<HTMLButtonElement>): void => {
    const filterValue = event.currentTarget.value;

    setStatusFilterValue(filterValue);
  };

  const clearCompletedTodos = (): void => {
    const notCompletedTodos = todosList.filter(
      ({ isCompleted }) => isCompleted === false
    );

    setTodosList(notCompletedTodos);
  };

  const getActiveTodosAmount = (): number => {
    return todosList.filter(({ isCompleted }) => isCompleted === false).length;
  };

  const isCompletedTodosExist = (): boolean => {
    return todosList.find(({ isCompleted }) => isCompleted === true)
      ? true
      : false;
  };

  return {
    filterTodosByStatus,
    showFilteredTodos,
    clearCompletedTodos,
    getActiveTodosAmount,
    isCompletedTodosExist,
  };
};

export { useTodosFilter };
