function TaskInputForm({ addTask }: { addTask: (formData: FormData) => void }) {
  return (
    <div className="mb-6">
      <form action={addTask}>
        <div className="flex gap-2 flex-wrap">
          <input
            type="text"
            placeholder="Add a new task..."
            name="task"
            className="flex-1 bg-slate-800 px-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-cyan-500 text-slate-100 placeholder:text-slate-400"
          />
          <button className="bg-cyan-500 px-4 py-3 rounded-lg border-none font-semibold w-full sm:w-fit transition-colors hover:bg-cyan-600 cursor-pointer active:scale-95">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskInputForm;
