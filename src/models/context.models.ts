import { ReactNode, Dispatch, SetStateAction } from 'react';
import { ITodoItem } from './todoItem.models';

interface IContext {
  todosList: ITodoItem[];
  newTodoValue: string;
  setTodosList: Dispatch<SetStateAction<ITodoItem[]>>;
  setNewTodoValue: Dispatch<SetStateAction<string>>;
}

type ContextProps = { children: ReactNode };

export type { IContext, ContextProps };
