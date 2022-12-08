import { FC } from 'react';
import { TodoItemCheckbox } from './todoItemCheckbox/TodoItemCheckbox';
import { TodoItemDescription } from './todoItemDescription/TodoItemDescription';
import { TodoItemEditForm } from './todoItemEditForm/TodoItemEditForm';
import s from './TodoItem.module.css';

const TodoItem: FC = () => {
  return (
    <li className={s.todo}>
      <TodoItemCheckbox />
      <TodoItemDescription />
      <button type="button" className={s.delete__btn}></button>
      <TodoItemEditForm />
    </li>
  );
};

export { TodoItem };
