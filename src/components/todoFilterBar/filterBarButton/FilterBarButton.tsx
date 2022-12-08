import { FC, useContext } from 'react';
import { Context } from '../../../context/context';
import { useTodosFilter } from '../../../hooks/useTodosFilter';
import { FilterButtonProps } from './FilterBarButtonю.props';
import s from './FilterBarButton.module.css';

const FilterBarButton: FC<FilterButtonProps> = (button) => {
  const { statusFilterValue } = useContext(Context);
  const { showFilteredTodos } = useTodosFilter();

  const buttonCurrentClass =
    statusFilterValue === button.value
      ? `${s.button} ${s.button_active}`
      : s.button;

  return (
    <button
      type="button"
      value={button.value}
      className={buttonCurrentClass}
      onClick={(e) => showFilteredTodos(e)}
    >
      {button.label}
    </button>
  );
};

export { FilterBarButton };
