import { FC } from 'react';
import { useTodosFilter } from '../../../hooks/useTodosFilter';
import s from './FilterBarCounter.module.css';

const FilterBarCounter: FC = () => {
  const { getActiveTodosAmount } = useTodosFilter();

  return <span className={s.counter}>{getActiveTodosAmount()} items left</span>;
};

export { FilterBarCounter };
