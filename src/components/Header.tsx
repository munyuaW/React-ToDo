import { FaClipboardList } from "react-icons/fa";

function Header() {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 rounded-lg bg-linear-to-br from-cyan-300 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/25">
        <FaClipboardList className="size-6" />
      </div>
      <div className="text">
        <h1 className="text-2xl font-bold">My Todo</h1>
        <p className="text-sm text-slate-400">Stay Productive</p>
      </div>
    </div>
  );
}

export default Header;
