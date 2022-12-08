import { FC } from 'react';
import { TodoItemCheckbox } from './todoItemCheckbox/TodoItemCheckbox';
import { TodoItemDescription } from './todoItemDescription/TodoItemDescription';
import { TodoItemEditForm } from './todoItemEditForm/TodoItemEditForm';
import { useTodosListHandle } from '../../hooks/useTodosListHandle';
import { useTodoEdit } from '../../hooks/useTodoEdit';
import { TodoItemProps } from './TodoItem.props';
import s from './TodoItem.module.css';

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const { deleteTodo } = useTodosListHandle();
  const { todoEditMode, enterTodoEditMode } = useTodoEdit(todo);

  return (
    <li className={s.todo}>
      <TodoItemCheckbox todo={todo} />
      <TodoItemDescription todo={todo} enterTodoEditMode={enterTodoEditMode} />
      <button
        type="button"
        className={s.delete__btn}
        onClick={() => deleteTodo(todo.id)}
      ></button>
      {todoEditMode && <TodoItemEditForm todo={todo} />}
    </li>
  );
};

export { TodoItem };
