import { useContext, useState, KeyboardEvent, MouseEvent } from 'react';
import { Context } from '../context/context';
import { ITodoItem } from '../models/todoItem.models';

const useTodoEdit = (todo: ITodoItem) => {
  const [todoEditMode, setTodoEditMode] = useState<boolean>(false);
  const [editTodoValue, setEditTodoValue] = useState<string>(todo.description);
  const { todosList, setTodosList } = useContext(Context);

  const enterTodoEditMode = (): void => {
    setTodoEditMode(true);
  };

  const applyTodoEditChanges = (): void => {
    const updatedTodoList = todosList.map((item) => {
      if (item.id === todo.id) {
        return { ...item, description: editTodoValue };
      }
      return item;
    });

    setTodosList(updatedTodoList);
  };

  const exitTodoEditMode = (event: KeyboardEvent | MouseEvent): void => {
    const isValidAction =
      (event as KeyboardEvent).key === 'Enter' ||
      (event as MouseEvent).type === 'click';

    if (isValidAction) {
      setTodoEditMode(false);
      applyTodoEditChanges();
    }
  };

  return {
    enterTodoEditMode,
    exitTodoEditMode,
    setEditTodoValue,
    todoEditMode,
    editTodoValue,
  };
};

export { useTodoEdit };
