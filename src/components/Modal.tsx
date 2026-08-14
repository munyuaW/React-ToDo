import type {
  ButtonProps,
  ModalProps,
  EditBoxProps,
  ConfirmDeleteBoxProps,
} from "../types";

function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.handleClick}
      className={`border-none px-4 py-2 rounded-md cursor-pointer font-semibold ${props.bgColor} ${props.textColor} transition-all active:scale-95`}>
      {props.text}
    </button>
  );
}

function EditBox(props: EditBoxProps) {
  return (
    <div className="space-y-2.5 text-center">
      <input
        type="text"
        name=""
        id=""
        value={props.editText}
        onChange={(e) => props.setEditText(e.target.value)}
        placeholder="Task to edit here"
        className="w-full border-slate-700 rounded-sm focus:outline-none focus:border-cyan-500 text-slate-800"
      />
      <div className="flex justify-center gap-2">
        <Button
          text="Save"
          bgColor="bg-emerald-500"
          textColor="text-white"
          handleClick={props.saveEdit}
        />
        <Button
          text="Cancel"
          bgColor="bg-orange-600"
          textColor="text-white"
          handleClick={props.cancelEdit}
        />
      </div>
    </div>
  );
}

function ConfirmDeleteBox(props: ConfirmDeleteBoxProps) {
  if (props.deleteId === undefined) return;
  return (
    <div className="space-y-2.5 text-center">
      <p>Sure you want to delete? This is permanent and cannot be undone!</p>
      <div className="flex justify-center gap-2">
        <Button
          text="Confirm"
          bgColor="bg-orange-600"
          textColor="text-white"
          handleClick={() => props.confirmDelete(props.deleteId ?? "")}
        />
        <Button
          text="Cancel"
          bgColor="bg-slate-500"
          textColor="text-white"
          handleClick={props.cancelDelete}
        />
      </div>
    </div>
  );
}

function Modal({
  isEdit,
  editIndex,
  editText,
  setEditText,
  onSave,
  deleteId,
  onConfirm,
  onCancel,
}: ModalProps) {
  const handleSetEditText = (text: string | undefined) => {
    if (setEditText) {
      setEditText(text ?? "");
    }
  };

  return (
    <div className="absolute inset-0 bg-slate-950/30 backdrop-blur-sm z-9 flex justify-center items-center">
      <div className="w-75 bg-white p-4 rounded-md text-slate-950">
        {isEdit ?
          <EditBox
            editIndex={editIndex}
            editText={editText}
            setEditText={handleSetEditText}
            saveEdit={onSave}
            cancelEdit={onCancel}
          />
        : <ConfirmDeleteBox
            deleteId={deleteId}
            confirmDelete={onConfirm}
            cancelDelete={onCancel}
          />
        }
      </div>
    </div>
  );
}

export default Modal;
