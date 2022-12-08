import { FC, useContext } from 'react';
import { Context } from '../../context/context';
import { TodoItem } from '../todoItem/TodoItem';
import { v4 as uuidv4 } from 'uuid';
import s from './TodoList.module.css';

const TodoList: FC = () => {
  const { todosList } = useContext(Context);

  return (
    <ul className={s.todoList}>
      {todosList.map((todo) => (
        <TodoItem key={uuidv4()} />
      ))}
    </ul>
  );
};

export { TodoList };
