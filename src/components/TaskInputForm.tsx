function TaskInputForm({ onAdd }: { onAdd: (text: string) => void }) {
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const value = (formData.get("task") ?? "").toString().trim();

    if (!value) return;

    onAdd(value);
    e.currentTarget.reset();
  }
  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 flex-wrap">
          <label htmlFor="task-input" className="sr-only">
            Add a new task
          </label>
          <input
            type="text"
            id="task-input"
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
