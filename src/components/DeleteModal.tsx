import type { DeleteModalProps } from "../types";

export default function DeleteModal({ onConfirm, onCancel }: DeleteModalProps) {
  return (
    <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-sm z-9 flex justify-center items-center">
      <div className="w-75 bg-white p-4 rounded-md text-slate-950">
        <div className="space-y-2.5 text-center">
          <p>Sure you want to delete? This is permanent and cannot be undone!</p>
          <div className="flex justify-center gap-2">
            <button
              type="button"
              onClick={onConfirm}
              className="border-none px-4 py-2 rounded-md cursor-pointer font-semibold bg-orange-600 text-white transition-all active:scale-95">
              Confirm
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="border-none px-4 py-2 rounded-md cursor-pointer font-semibold bg-slate-500 text-white transition-all active:scale-95">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
