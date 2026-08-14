import type { MouseEventHandler } from "react";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
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
  onConfirm: (id: string) => void;
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
  confirmDelete: (id: string) => void;
  cancelDelete: () => void;
}
