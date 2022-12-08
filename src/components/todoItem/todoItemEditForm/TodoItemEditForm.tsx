import { FC } from 'react';
import { EditFormProps } from './TodoItemEditForm.props';
import s from './TodoItemEditForm.module.css';

const TodoItemEditForm: FC<EditFormProps> = ({ todo }) => {
  return (
    <>
      <div className={s.edit__blur} />
      <div className={s.edit__wrapper}>
        <input type="text" className={s.edit} />
      </div>
    </>
  );
};

export { TodoItemEditForm };
