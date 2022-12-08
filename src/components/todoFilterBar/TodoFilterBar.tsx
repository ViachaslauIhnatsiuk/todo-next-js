import { FC, useContext, MouseEvent } from 'react';
import { filterButtons } from '../../constants/filterButtons';
import { Context } from '../../context/context';
import { v4 as uuidv4 } from 'uuid';
import s from './TodoFilterBar.module.css';

const TodoFilterBar: FC = () => {
  const { todosList, statusFilterValue, setTodosList, setStatusFilterValue } =
    useContext(Context);

  const showFilteredTodos = (event: MouseEvent<HTMLButtonElement>): void => {
    const filterValue = event.currentTarget.value;

    setStatusFilterValue(filterValue);
  };

  const clearCompletedTodos = (): void => {
    const notCompletedTodos = todosList.filter(
      ({ isCompleted }) => isCompleted === false
    );

    setTodosList(notCompletedTodos);
  };

  const getActiveTodosAmount = (): number => {
    return todosList.filter(({ isCompleted }) => isCompleted === false).length;
  };

  const isCompletedTodosExist = (): boolean => {
    return todosList.find(({ isCompleted }) => isCompleted === true)
      ? true
      : false;
  };

  return (
    <>
      {todosList.length > 0 && (
        <section className={s.filterbar}>
          <span className={s.filterbar__count}>
            {getActiveTodosAmount()} items left
          </span>
          <ul className={s.filterbar__btns}>
            {filterButtons.map((button) => {
              return (
                <li key={uuidv4()}>
                  <button
                    type="button"
                    value={button.value}
                    className={s.filterbar__btn}
                    style={{
                      border:
                        statusFilterValue === button.value
                          ? '1px solid #af2f2f33'
                          : 'none',
                    }}
                    onClick={(e) => showFilteredTodos(e)}
                  >
                    {button.label}
                  </button>
                </li>
              );
            })}
          </ul>
          {isCompletedTodosExist() && (
            <button
              className={s.filterbar__btn_clear}
              type="button"
              onClick={clearCompletedTodos}
            >
              Clear completed
            </button>
          )}
        </section>
      )}
    </>
  );
};

export { TodoFilterBar };
