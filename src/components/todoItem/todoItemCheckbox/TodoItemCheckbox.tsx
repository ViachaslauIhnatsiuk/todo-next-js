import { FC } from 'react';
import { ITodoItem } from '../../../models/todoItem.models';
import Image from 'next/image';
import s from './TodoItemCheckbox.module.css';

const TodoItemCheckbox: FC<{ todo: ITodoItem }> = ({ todo }) => {
  return (
    <div
      className={s.checkbox}
      style={{ borderColor: todo.isCompleted ? '#c2ddd8' : '#ededed' }}
    >
      {todo.isCompleted ? (
        <Image src="/check.svg" alt="check" width={30} height={26} />
      ) : null}
    </div>
  );
};

export { TodoItemCheckbox };
