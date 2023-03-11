import { MdEdit, MdDelete } from "react-icons/md";

const LayoutItem = ({ notes }) => {
  return (
    <>
      <input id="my-modal-4" className="modal-toggle" type="checkbox" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You&apos;ve been selected for a chance to get one year of
            subscription to use Wikipedia for free!
          </p>
        </label>
      </label>
      <input id="my-modal-3" className="modal-toggle" type="checkbox" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You&apos;ve been selected for a chance to get one year of
            subscription to use Wikipedia for free!
          </p>
        </div>
      </div>
      {notes.map((note) => (
        <>
          <div
            key={note.id}
            className="min-h-fit bg-yellow-300 text-black flex flex-col rounded-xl z-10 px-2 py-1.5"
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
              <label htmlFor="my-modal-3" className="btn btn-sm">
                <MdEdit className="text-xl text-white" />
              </label>
              <label htmlFor="my-modal-4" className="btn btn-sm btn-error">
                <MdDelete className="text-xl text-white" />
              </label>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default LayoutItem;
