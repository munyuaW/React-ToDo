import Header from "./components/Header";
import Stats from "./components/Stats";

export default function App() {
  return (
    <div className="min-h-screen flex justify-center items-center px-3 py-6">
      {/* ToDo container as a card */}
      <div className="relative w-full max-w-md bg-slate-900/30 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-2xl">
        {/* The Glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div>
          <Header />
          <Stats />
          <div>Task Input</div>
          <div>Tasks Container</div>
        </div>
      </div>
    </div>
  );
}
