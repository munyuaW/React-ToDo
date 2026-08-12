export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoItem {
  todo: Todo;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}
