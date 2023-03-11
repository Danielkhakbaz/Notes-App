import { MdEdit, MdDelete } from "react-icons/md";

const LayoutItem = ({ notes }) => {
  return (
    <>
      {notes.map((note) => (
        <>
          <div
            key={note.id}
            className="min-h-fit bg-yellow-300 flex flex-col text-black rounded-xl z-10 px-2 py-1.5"
            style={{
              gridRowEnd:
                note.size === "small"
                  ? "span 10"
                  : note.size && note.size === "medium"
                  ? "span 15"
                  : "span 20",
            }}
          >
            <div className="grow">
              <p className="text-2xl">{note.title}</p>
              <p className="text-sm text-gray-900 py-4">{note.text}</p>
            </div>
            <div className="flex flex-row-reverse gap-3">
              <button className="btn btn-sm">
                <MdEdit className="text-xl" />
              </button>
              <button className="btn btn-sm btn-error">
                <MdDelete className="text-xl text-white" />
              </button>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default LayoutItem;
