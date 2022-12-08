import { FC, useContext } from 'react';
import { Context } from '../../../context/context';
import { useTodosFilter } from '../../../hooks/useTodosFilter';
import { FilterButtonProps } from './FilterBarButtonю.props';
import s from './FilterBarButton.module.css';

const FilterBarButton: FC<FilterButtonProps> = (button) => {
  const { statusFilterValue } = useContext(Context);
  const { showFilteredTodos } = useTodosFilter();

  return (
    <button
      type="button"
      value={button.value}
      className={s.button}
      style={{
        border:
          statusFilterValue === button.value ? '1px solid #af2f2f33' : 'none',
      }}
      onClick={(e) => showFilteredTodos(e)}
    >
      {button.label}
    </button>
  );
};

export { FilterBarButton };
