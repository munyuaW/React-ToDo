import { useState } from "react";

import type { EditModalProps } from "../types";

export default function EditModal({
  initialText,
  onSave,
  onCancel,
}: EditModalProps) {
  const [editText, setEditText] = useState(initialText);

  function saveEdit() {
    const cleanText = editText.trim();
    if (!cleanText) return;
    onSave(cleanText);
  }

  return (
    <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-sm z-9 flex justify-center items-center">
      <div className="w-75 bg-white p-4 rounded-md text-slate-950">
        <div className="space-y-2.5 text-center">
          <label
            htmlFor="edit-task-input"
            className="block text-sm font-semibold mb-2">
            Edit task
          </label>
          <input
            type="text"
            id="edit-task-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            placeholder="Task to edit here"
            className="w-full border-slate-700 rounded-sm focus:outline-none focus:border-cyan-500 text-slate-800"
          />
          <div className="flex justify-center gap-2">
            <button
              type="button"
              onClick={saveEdit}
              className="border-none px-4 py-2 rounded-md cursor-pointer font-semibold bg-emerald-500 text-white transition-all active:scale-95">
              Save
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="border-none px-4 py-2 rounded-md cursor-pointer font-semibold bg-orange-600 text-white transition-all active:scale-95">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
