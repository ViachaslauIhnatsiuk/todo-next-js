import { FC } from 'react';
import { FilterBarButton } from '../filterBarButton/FilterBarButton';
import { filterButtons } from '../../../constants/filterButtons';
import { v4 as uuidv4 } from 'uuid';
import s from './FilterBarButtons.module.css';

const FilterBarButtons: FC = () => {
  return (
    <ul className={s.buttons}>
      {filterButtons.map((button) => {
        return (
          <li key={uuidv4()}>
            <FilterBarButton {...button} />
          </li>
        );
      })}
    </ul>
  );
};

export { FilterBarButtons };
