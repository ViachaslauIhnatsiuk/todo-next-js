import { FC, useContext } from 'react';
import { Context } from '../../context/context';
import { useTodosListHandle } from '../../hooks/useTodosListHandle';
import s from './TodoForm.module.css';

const TodoForm: FC = () => {
  const { todosList, newTodoValue, setNewTodoValue } = useContext(Context);
  const { addTodo, toggleAllTodosStatus } = useTodosListHandle();

  return (
    <form className={s.form} onSubmit={addTodo}>
      {todosList.length ? (
        <label className={s.toggleStatus} onClick={toggleAllTodosStatus} />
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
