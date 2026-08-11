import { defaultTasks } from "../data";

function Stats() {
  const total = defaultTasks.length;
  const completed = defaultTasks.filter((task) => task.completed).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="grid grid-cols-3 gap-4 mb-6 font-Inter">
      <div className="bg-slate-800 p-2 sm:p-4 text-center rounded-xl border border-slate-700">
        <p className="text-cyan-400 font-bold text-lg sm:text-2xl">{total}</p>
        <p className="text-slate-400 text-xs sm:text-sm">Total</p>
      </div>
      <div className="bg-slate-800 p-2 sm:p-4 text-center rounded-xl border border-slate-700">
        <p className="text-emerald-400 font-bold text-lg sm:text-2xl">
          {completed}
        </p>
        <p className="text-slate-400 text-xs sm:text-sm">Done</p>
      </div>
      <div className="bg-slate-800 p-2 sm:p-4 text-center rounded-xl border border-slate-700">
        <p className="text-amber-400 font-bold text-lg sm:text-2xl">
          {percentage}%
        </p>
        <p className="text-slate-400 text-xs sm:text-sm">Progress</p>
      </div>
    </div>
  );
}

export default Stats;
