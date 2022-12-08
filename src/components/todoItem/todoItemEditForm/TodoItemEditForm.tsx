import { FC } from 'react';
import { useTodoEdit } from '../../../hooks/useTodoEdit';
import { EditFormProps } from './TodoItemEditForm.props';
import s from './TodoItemEditForm.module.css';

const TodoItemEditForm: FC<EditFormProps> = ({ todo }) => {
  const { exitTodoEditMode, setEditTodoValue, editTodoValue } =
    useTodoEdit(todo);

  return (
    <>
      <div className={s.edit__blur} onClick={exitTodoEditMode} />
      <div className={s.edit__wrapper}>
        <input
          type="text"
          autoFocus
          value={editTodoValue}
          className={s.edit}
          onKeyPress={exitTodoEditMode}
          onChange={(e) => setEditTodoValue(e.target.value)}
        />
      </div>
    </>
  );
};

export { TodoItemEditForm };
