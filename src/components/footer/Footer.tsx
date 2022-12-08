import { FC } from 'react';
import s from './Footer.module.css';

const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <p>Double-click to edit a todo</p>
      <p>
        Created by{' '}
        <a href="https://github.com/ViachaslauIhnatsiuk" target="_blank">
          Viachaslau Ihnatsiuk
        </a>
      </p>
      <p>
        Part of{' '}
        <a href="http://www.todomvc.com" target="_blank">
          TodoMVC
        </a>
      </p>
    </footer>
  );
};

export { Footer };
