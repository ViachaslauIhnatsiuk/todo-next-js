import { FC } from 'react';
import s from './Header.module.css';

const Header: FC = () => {
  return <h1 className={s.title}>todos</h1>;
};

export { Header };
