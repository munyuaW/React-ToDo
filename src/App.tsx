import { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Stats from "./components/Stats";
import TaskInputForm from "./components/TaskInputForm";
import TodoItem from "./components/TodoItem";
import { defaultTasks } from "./data";
import type { Todo } from "./types";

export default function App() {
  const [tasks, setTasks] = useState<Todo[]>(defaultTasks);
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const percentComplete =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  function addNewTask(formData: FormData) {
    const input = formData.get("task");
    if (typeof input !== "string" || !input.trim()) return;

    const newTask: Todo = {
      id: crypto.randomUUID(),
      text: input.trim(),
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
  }

  function toggleChecked(id: Todo["id"]) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }
  function editTask() {}
  function deleteTask() {}

  const todoItems = tasks.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onToggle={toggleChecked}
      onEdit={editTask}
      onDelete={deleteTask}
    />
  ));

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-3 py-6">
      {/* ToDo container as a card */}
      <div className="relative w-full max-w-md bg-slate-900/30 backdrop-blur-xl border border-slate-800 px-4 py-8 rounded-3xl shadow-2xl">
        {/* The Glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div>
          <Header />
          <Stats
            total={totalTasks}
            completed={completedTasks}
            percentage={percentComplete}
          />
          <TaskInputForm addTask={addNewTask} />
          <div className="space-y-2">{todoItems}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
