import { FC, useContext } from 'react';
import { Context } from '../../context/context';
import s from './TodoForm.module.css';

const TodoForm: FC = () => {
  const { todosList, newTodoValue, setNewTodoValue } = useContext(Context);

  return (
    <form className={s.form}>
      {todosList.length ? <label className={s.toggleStatus} /> : null}
      <input
        className={s.input}
        type="text"
        value={newTodoValue}
        onChange={(e) => setNewTodoValue(e.target.value)}
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export { TodoForm };
