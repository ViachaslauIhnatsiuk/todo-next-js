import { FC } from 'react';
import { useTodosFilter } from '../../../hooks/useTodosFilter';
import s from './FilterBarClearButton.module.css';

const FilterBarClearButton: FC = () => {
  const { clearCompletedTodos } = useTodosFilter();

  return (
    <button
      className={s.clear__btn}
      type="button"
      onClick={clearCompletedTodos}
    >
      Clear completed
    </button>
  );
};

export { FilterBarClearButton };
