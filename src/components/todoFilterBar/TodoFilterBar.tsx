import { FC, useContext } from 'react';
import { Context } from '../../context/context';
import { useTodosFilter } from '../../hooks/useTodosFilter';
import { FilterBarCounter } from './filterBarCounter/FilterBarCounter';
import { FilterBarClearButton } from './filterBarClearButton/FilterBarClearButton';
import { FilterBarButtons } from './filterBarButtons/FilterBarButtons';
import s from './TodoFilterBar.module.css';

const TodoFilterBar: FC = () => {
  const { todosList } = useContext(Context);
  const { isCompletedTodosExist } = useTodosFilter();

  return (
    <>
      {todosList.length > 0 && (
        <section className={s.filterbar}>
          <FilterBarCounter />
          <FilterBarButtons />
          {isCompletedTodosExist() && <FilterBarClearButton />}
        </section>
      )}
    </>
  );
};

export { TodoFilterBar };
