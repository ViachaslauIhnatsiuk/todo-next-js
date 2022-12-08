import { FC } from 'react';
import { Header } from '../components/header/Header';
import { TodoForm } from '../components/todoForm/TodoForm';
import { TodoList } from '../components/todoList/TodoList';
import { TodoFilterBar } from '../components/todoFilterBar/TodoFilterBar';
import { Footer } from '../components/footer/Footer';
import s from '../styles/Home.module.css';

const Home: FC = () => {
  return (
    <div className={s.container}>
      <Header />
      <main className={s.main}>
        <TodoForm />
        <TodoList />
        <TodoFilterBar />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
