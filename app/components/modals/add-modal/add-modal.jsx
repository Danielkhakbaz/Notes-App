import { useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const sizes = ["small", "medium", "large"];

const AddModal = () => {
  const [newNote, setNewNote] = useState({
    title: "",
    text: "",
    size: sizes[Math.floor(Math.random() * 3)],
  });

  const router = useRouter();

  const handleSaveButton = () => {
    localStorage.setItem(
      "notes",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("notes")),
        {
          id: uuidv4(),
          ...newNote,
          size: sizes[Math.floor(Math.random() * 3)],
        },
      ])
    );

    router.refresh();
  };

  const handleClear = () => {
    setNewNote({
      title: "",
      text: "",
      size: sizes[Math.floor(Math.random() * 3)],
    });
  };

  return (
    <>
      <input id="modal-add" className="modal-toggle" type="checkbox" />
      <label className="modal cursor-pointer" htmlFor="modal-add">
        <label className="modal-box flex flex-col gap-2 relative">
          <h3 className="font-bold text-2xl text-center">
            {newNote?.title ? newNote?.title : "Add a new Note"}
          </h3>
          <div className="flex flex-col gap-2">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Note&apos;s Title</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                value={newNote.title}
                placeholder="Type the note's title in here..."
                onChange={(event) =>
                  setNewNote({ ...newNote, title: event.currentTarget.value })
                }
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Note&apos;s Text</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                type="text"
                value={newNote.text}
                placeholder="Type the note's text in here..."
                onChange={(event) =>
                  setNewNote({ ...newNote, text: event.currentTarget.value })
                }
              />
            </div>
          </div>
          <div className="flex flex-row-reverse gap-4 pt-8">
            <label
              className="btn btn-success"
              htmlFor="modal-add"
              disabled={!newNote.title || !newNote.text}
              onClick={() => {
                handleSaveButton();
                handleClear();
              }}
            >
              Save
            </label>
            <label className="btn btn-outline" htmlFor="modal-add">
              Cancel
            </label>
          </div>
        </label>
      </label>
    </>
  );
};

export default AddModal;
