import { createContext, useState } from 'react';
import { IContext, ContextProps } from '../models/context.models';
import { ITodoItem } from '../models/todoItem.models';

const Context = createContext<IContext>({
  todosList: [],
  newTodoValue: '',
  setTodosList: () => [],
  setNewTodoValue: () => '',
});

const ContextProvider = (props: ContextProps) => {
  const [todosList, setTodosList] = useState<ITodoItem[]>([]);
  const [newTodoValue, setNewTodoValue] = useState<string>('');

  return (
    <Context.Provider
      value={{
        todosList,
        newTodoValue,
        setTodosList,
        setNewTodoValue,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
