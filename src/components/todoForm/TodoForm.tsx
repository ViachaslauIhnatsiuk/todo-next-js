import { FC, useContext } from 'react';
import { Context } from '../../context/context';
import { useTodosListHandle } from '../../hooks/useTodosListHandle';
import s from './TodoForm.module.css';

const TodoForm: FC = () => {
  const { todosList, newTodoValue, setNewTodoValue } = useContext(Context);
  const { addTodo, isNotCompletedTodosExist, toggleAllTodosStatus } =
    useTodosListHandle();

  const toggleStatusButtonClass = isNotCompletedTodosExist()
    ? s.toggleStatus
    : `${s.toggleStatus} ${s.toggleStatus_active}`;

  return (
    <form className={s.form} onSubmit={addTodo}>
      {todosList.length ? (
        <label
          className={toggleStatusButtonClass}
          onClick={toggleAllTodosStatus}
        />
      ) : null}
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
