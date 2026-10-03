import type { MouseEventHandler } from "react";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

type TodoAction = (id: string) => void;

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

export interface ButtonProps {
  text: string;
  bgColor: string;
  textColor?: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export interface ModalProps {
  isEdit: boolean;
  editIndex?: number;
  editText?: string;
  setEditText?: (text: string) => void;
  onSave: () => void;
  onConfirm: TodoAction;
  deleteId?: string;
  onCancel: () => void;
}

export interface EditBoxProps {
  editIndex: number | undefined;
  editText: string | undefined;
  setEditText: (text: string | undefined) => void;
  saveEdit: () => void;
  cancelEdit: () => void;
}

export interface ConfirmDeleteBoxProps {
  deleteId: string | undefined;
  confirmDelete: TodoAction;
  cancelDelete: () => void;
}
