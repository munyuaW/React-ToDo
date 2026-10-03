import { useState, useEffect } from "react";
import { MdStorage } from "react-icons/md";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Stats from "./components/Stats";
import TaskInputForm from "./components/TaskInputForm";
import TodoItem from "./components/TodoItem";
// import { defaultTasks } from "./data";
import type { Todo } from "./types";
import DeleteModal from "./components/DeleteModal";
import EditModal from "./components/EditModal";

type ActiveModal =
  | { type: "edit"; taskId: string; initialText: string }
  | { type: "delete"; taskId: string }
  | null;

export default function App() {
  const [tasks, setTasks] = useState<Todo[]>(loadFromLocalStorage);
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const percentComplete =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const [activeModal, setActiveModal] = useState<ActiveModal>(null);

  // Save to localStorage when tasks change
  useEffect(() => {
    saveToLocalStorage(tasks);
  }, [tasks]);

  function addNewTask(text: string) {
    const cleanedInput = text.trim();
    if (!cleanedInput) return;

    const newTask: Todo = {
      id: crypto.randomUUID(),
      text: cleanedInput,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
  }

  function toggleChecked(id: string) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function openEditModal(taskId: string) {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    setActiveModal({ type: "edit", taskId, initialText: task.text });
  }

  function saveEdit(taskId: string, text: string) {
    const cleanText = text.trim();
    if (!cleanText) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, text: cleanText } : task,
      ),
    );

    closeModal();
  }

  function showDeleteModal(taskId: string) {
    setActiveModal({ type: "delete", taskId });
  }

  function confirmDelete(taskId: string) {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
    closeModal();
  }

  function closeModal() {
    setActiveModal(null);
  }

  function saveToLocalStorage(tasks: Todo[]) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function loadFromLocalStorage() {
    // runtime env. check: for vite SPA window is always defined at runtime
    if (typeof window === "undefined") return [];
    try {
      const savedTasks = localStorage.getItem("tasks");
      if (!savedTasks) return [];

      const parsed = JSON.parse(savedTasks);
      if (!Array.isArray(parsed)) return [];

      return parsed.filter(
        (item: Todo) =>
          typeof item === "object" &&
          item !== null &&
          typeof item.id === "string" &&
          typeof item.text === "string" &&
          typeof item.completed === "boolean",
      );
    } catch (error) {
      console.error("Failed to parse tasks from localStorage", error);
      return [];
    }
  }

  const todoItems = tasks.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onToggle={toggleChecked}
      onEdit={openEditModal}
      onDelete={showDeleteModal}
    />
  ));

  return (
    <>
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
            <TaskInputForm onAdd={addNewTask} />
            <div className="space-y-2">{todoItems}</div>
          </div>

          {/* Card Footer */}
          <div className="flex items-center gap-1 absolute bottom-0 pl-1 py-2">
            <MdStorage className="text-xs text-green-400" />
            <span className="text-[10px] text-slate-400">
              Saved on this device
            </span>
          </div>
        </div>
        <Footer />
      </div>
      {activeModal?.type === "edit" && (
        <EditModal
          key={activeModal.taskId}
          initialText={activeModal.initialText}
          onSave={(text) => saveEdit(activeModal.taskId, text)}
          onCancel={closeModal}
        />
      )}
      {activeModal?.type === "delete" && (
        <DeleteModal
          onConfirm={() => confirmDelete(activeModal.taskId)}
          onCancel={closeModal}
        />
      )}
    </>
  );
}
