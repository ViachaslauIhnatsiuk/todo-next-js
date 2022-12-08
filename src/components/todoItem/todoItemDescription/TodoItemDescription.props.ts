import { ITodoItem } from '../../../models/todoItem.models';

export type DescriptionProps = {
  todo: ITodoItem;
  enterTodoEditMode: () => void;
};
