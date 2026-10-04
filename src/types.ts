type TodoAction = (id: string) => void;

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoItemProps {
  todo: Todo;
  onToggle: TodoAction;
  onEdit: TodoAction;
  onDelete: TodoAction;
}

export interface StatsProps {
  total: number;
  completed: number;
  percentage: number;
}

export interface EditModalProps {
  initialText: string;
  onSave: (text: string) => void;
  onCancel: () => void;
}

export interface DeleteModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export type ActiveModal =
  | { type: "edit"; taskId: string; initialText: string }
  | { type: "delete"; taskId: string }
  | null;
