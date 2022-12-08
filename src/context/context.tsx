import { createContext, useState } from 'react';
import { IContext, ContextProps } from '../models/context.models';
import { ITodoItem } from '../models/todoItem.models';

const Context = createContext<IContext>({
  todosList: [],
  newTodoValue: '',
  statusFilterValue: '',
  setTodosList: () => [],
  setNewTodoValue: () => '',
  setStatusFilterValue: () => '',
});

const ContextProvider = (props: ContextProps) => {
  const [todosList, setTodosList] = useState<ITodoItem[]>([]);
  const [newTodoValue, setNewTodoValue] = useState<string>('');
  const [statusFilterValue, setStatusFilterValue] = useState<string>('all');

  return (
    <Context.Provider
      value={{
        todosList,
        newTodoValue,
        statusFilterValue,
        setTodosList,
        setNewTodoValue,
        setStatusFilterValue,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
