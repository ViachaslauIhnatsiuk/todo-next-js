import { FC, useContext, useEffect } from 'react';
import { Context } from '../../context/context';
import { useTodosFilter } from '../../hooks/useTodosFilter';
import { TodoItem } from '../todoItem/TodoItem';
import { v4 as uuidv4 } from 'uuid';
import s from './TodoList.module.css';

const TodoList: FC = () => {
  const { todosList, statusFilterValue } = useContext(Context);
  const { filterTodosByStatus } = useTodosFilter();

  useEffect(() => {}, [todosList, statusFilterValue]);

  return (
    <ul className={s.todoList}>
      {todosList.filter(filterTodosByStatus).map((todo) => (
        <TodoItem key={uuidv4()} todo={todo} />
      ))}
    </ul>
  );
};

export { TodoList };
