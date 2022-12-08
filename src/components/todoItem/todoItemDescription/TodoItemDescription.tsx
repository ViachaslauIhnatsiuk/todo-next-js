import { FC } from 'react';
import { ITodoItem } from '../../../models/todoItem.models';
import s from './TodoItemDescription.module.css';

const TodoItemDescription: FC<{
  todo: ITodoItem;
}> = ({ todo }) => {
  return (
    <span
      className={s.description}
      style={
        todo.isCompleted
          ? { textDecoration: 'line-through', color: '#d9d9d9' }
          : { textDecoration: 'none', color: 'inherit' }
      }
    >
      {todo.description}
    </span>
  );
};

export { TodoItemDescription };
