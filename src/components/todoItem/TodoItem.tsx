import { FC } from 'react';
import s from './TodoItem.module.css';

const TodoItem: FC = () => {
  return <li className={s.todo}></li>;
};

export { TodoItem };
