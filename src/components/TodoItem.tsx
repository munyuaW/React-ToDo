import type { TodoItemProps } from "../types";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

function TodoItem(props: TodoItemProps) {
  return (
    <div className="flex items-center gap-2.5 border px-2 py-4 border-slate-700 rounded-lg">
      <input
        type="checkbox"
        defaultChecked={props.todo.completed}
        onClick={() => props.onToggle(props.todo.id)}
        className="size-5 border-2  rounded-full bg-transparent border-slate-700 text-slate-100 checked:bg-cyan-500 checked:border-cyan-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent transition-colors cursor-pointer active:scale-95"
      />
      <span
        className={`flex-1 ${props.todo.completed ? "line-through text-slate-400" : ""}`}>
        {props.todo.text}
      </span>
      <button
        onClick={() => props.onEdit(props.todo.id)}
        className="p-1 rounded-sm cursor-pointer -mr-2">
        <FaRegEdit className="size-4 text-emerald-400" />
      </button>
      <button
        onClick={() => props.onDelete(props.todo.id)}
        className="p-1 rounded-sm cursor-pointer -mr-2">
        <FaTrashAlt className="size-4 text-orange-700" />
      </button>
    </div>
  );
}

export default TodoItem;
