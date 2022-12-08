import { FC } from 'react';
import { DescriptionProps } from './TodoItemDescription.props';
import s from './TodoItemDescription.module.css';

const TodoItemDescription: FC<DescriptionProps> = ({
  todo,
  enterTodoEditMode,
}) => {
  const descriptionStyle = todo.isCompleted
    ? { textDecoration: 'line-through', color: '#d9d9d9' }
    : { textDecoration: 'none', color: 'inherit' };

  return (
    <span
      className={s.description}
      onDoubleClick={enterTodoEditMode}
      style={descriptionStyle}
    >
      {todo.description}
    </span>
  );
};

export { TodoItemDescription };
