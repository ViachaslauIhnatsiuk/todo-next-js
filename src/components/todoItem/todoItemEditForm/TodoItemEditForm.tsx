import { FC, useEffect, useRef } from 'react';
import { useTodoEdit } from '../../../hooks/useTodoEdit';
import { EditFormProps } from './TodoItemEditForm.props';
import s from './TodoItemEditForm.module.css';

const TodoItemEditForm: FC<EditFormProps> = ({ todo }) => {
  const { exitTodoEditMode, setEditTodoValue, todoEditMode, editTodoValue } =
    useTodoEdit(todo);

  const editFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!todoEditMode) {
      editFieldRef.current?.focus();
    }
  }, [todoEditMode]);

  return (
    <>
      <div className={s.edit__blur} onClick={exitTodoEditMode} />
      <div className={s.edit__wrapper}>
        <input
          ref={editFieldRef}
          type="text"
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
