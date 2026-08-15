import { useState, useEffect } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Stats from "./components/Stats";
import TaskInputForm from "./components/TaskInputForm";
import TodoItem from "./components/TodoItem";
// import { defaultTasks } from "./data";
import type { Todo } from "./types";
import Modal from "./components/Modal";

export default function App() {
  const [tasks, setTasks] = useState<Todo[]>(loadFromLocalStorage);
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const percentComplete =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState("");
  const [editIndex, setEditIndex] = useState<number | undefined>(undefined);
  const [deleteId, setDeleteId] = useState("");

  // Save to localStorage when tasks change
  useEffect(() => {
    saveToLocalStorage(tasks);
  }, [tasks]);

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

  function toggleChecked(id: string) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function showEditModal(index: number) {
    setShowModal(true);
    setIsEdit(true);

    editTask(index);
  }

  function editTask(index: number) {
    const taskToEdit = tasks[index];
    setEditIndex(index);
    setEditText(taskToEdit.text);
  }

  function saveEdit() {
    if (editIndex === undefined) return;
    const updatedTasks = [...tasks];
    updatedTasks[editIndex].text = editText;
    setTasks(updatedTasks);
    setShowModal(false);
    setIsEdit(false);
  }

  function shoDeleteModal(id: string) {
    setShowModal(true);
    setDeleteId(id);
  }

  function confirmDelete(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
    closeModal();
  }

  function closeModal() {
    setShowModal(false);
    setIsEdit(false);
  }

  function saveToLocalStorage(tasks: Todo[]) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function loadFromLocalStorage() {
    const savedTasks = localStorage.getItem("tasks");
    if (!savedTasks) return [];
    try {
      return JSON.parse(savedTasks) as Todo[];
    } catch (error) {
      console.error("Failed to parse tasks from localStorage", error);
      return [];
    }
  }

  const todoItems = tasks.map((todo, index) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onToggle={toggleChecked}
      onEdit={() => showEditModal(index)}
      onDelete={shoDeleteModal}
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
            <TaskInputForm addTask={addNewTask} />
            <div className="space-y-2">{todoItems}</div>
          </div>
        </div>
        <Footer />
      </div>
      {showModal && (
        <Modal
          isEdit={isEdit}
          editIndex={editIndex}
          editText={editText}
          setEditText={setEditText}
          onSave={saveEdit}
          deleteId={deleteId}
          onConfirm={confirmDelete}
          onCancel={closeModal}
        />
      )}
    </>
  );
}
