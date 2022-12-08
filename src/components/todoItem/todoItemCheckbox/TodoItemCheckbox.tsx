import { FC } from 'react';
import { useTodosListHandle } from '../../../hooks/useTodosListHandle';
import { CheckboxProps } from './TodoItemCheckbox.props';
import Image from 'next/image';
import s from './TodoItemCheckbox.module.css';

const TodoItemCheckbox: FC<CheckboxProps> = ({ todo }) => {
  const { toggleTodoStatus } = useTodosListHandle();

  const checkboxStyle = {
    borderColor: todo.isCompleted ? '#c2ddd8' : '#ededed',
  };

  return (
    <div
      className={s.checkbox}
      style={checkboxStyle}
      onClick={() => toggleTodoStatus(todo.id)}
    >
      {todo.isCompleted ? (
        <Image src="/check.svg" alt="check" width={30} height={26} />
      ) : null}
    </div>
  );
};

export { TodoItemCheckbox };
