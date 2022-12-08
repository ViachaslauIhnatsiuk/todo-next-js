import { FC } from 'react';
import { DescriptionProps } from './TodoItemDescription.props';
import s from './TodoItemDescription.module.css';

const TodoItemDescription: FC<DescriptionProps> = ({
  todo,
  enterTodoEditMode,
}) => {
  const descriptionCurrentClass = todo.isCompleted
    ? `${s.description} ${s.description_completed}`
    : s.description;

  return (
    <span className={descriptionCurrentClass} onDoubleClick={enterTodoEditMode}>
      {todo.description}
    </span>
  );
};

export { TodoItemDescription };
