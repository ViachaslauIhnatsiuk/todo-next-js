import { FC } from 'react';
import { useTodosListHandle } from '../../../hooks/useTodosListHandle';
import { CheckboxProps } from './TodoItemCheckbox.props';
import Image from 'next/image';
import s from './TodoItemCheckbox.module.css';

const TodoItemCheckbox: FC<CheckboxProps> = ({ todo }) => {
  const { toggleTodoStatus } = useTodosListHandle();

  const checkboxCurrentClass = todo.isCompleted
    ? `${s.checkbox} ${s.checkbox_checked}`
    : s.checkbox;

  return (
    <div
      className={checkboxCurrentClass}
      onClick={() => toggleTodoStatus(todo.id)}
    >
      {todo.isCompleted && (
        <Image src="/check.svg" alt="check" width={30} height={26} />
      )}
    </div>
  );
};

export { TodoItemCheckbox };
