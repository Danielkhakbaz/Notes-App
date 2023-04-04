import DeleteModal from "components/modals/delete-modal/delete-modal";
import EditModal from "components/modals/edit-modal/edit-modal";
import { MdDelete } from "react-icons/md";

const NoteItem = ({ note, index }) => {
  return (
    <>
      <label
        className="min-h-fit bg-yellow-300 text-black flex flex-col rounded-xl cursor-pointer ease-out duration-150 z-10 px-2 py-1.5 hover:bg-amber-300"
        htmlFor={`modal-edit-${index}`}
        style={{
          gridRowEnd:
            note.size === "small"
              ? "span 10"
              : note.size && note.size === "medium"
              ? "span 20"
              : "span 30",
        }}
      >
        <div className="grow">
          <p className="text-2xl">{note.title}</p>
          <p className="text-sm text-gray-900 py-4">{note.text}</p>
        </div>
        <div className="flex flex-row-reverse gap-3">
          <label
            htmlFor={`modal-delete-${index}`}
            className="btn btn-sm btn-error"
          >
            <MdDelete className="text-xl text-white" />
          </label>
        </div>
      </label>
      <DeleteModal note={note} index={index} />
      <EditModal note={note} index={index} />
    </>
  );
};

export default NoteItem;
