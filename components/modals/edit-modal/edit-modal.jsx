"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const EditModal = ({ note, index }) => {
  const [editedNote, setEditedNote] = useState({
    title: note.title,
    text: note.text,
  });

  const router = useRouter();

  const handleSaveButton = () => {
    const notes = [...JSON.parse(localStorage.getItem("notes"))];

    const newNotes = notes.map((theNote) => {
      if (theNote.id === note.id) {
        return { ...note, ...editedNote };
      } else {
        return theNote;
      }
    });

    localStorage.setItem("notes", JSON.stringify(newNotes));

    router.refresh();
  };

  return (
    <>
      <div style={{ display: "contents", margin: 0 }}>
        <input
          id={`modal-edit-${index}`}
          className="modal-toggle"
          type="checkbox"
        />
        <label htmlFor={`modal-edit-${index}`} className="modal cursor-pointer">
          <label className="modal-box flex flex-col gap-2 relative" htmlFor="">
            <h3 className="font-bold text-2xl text-center">
              {editedNote.title}
            </h3>
            <div className="flex flex-col gap-2">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Note&apos;s Title</span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  defaultValue={editedNote.title}
                  placeholder="Title"
                  type="text"
                  onChange={(event) =>
                    setEditedNote({
                      ...note,
                      title: event.currentTarget.value,
                      text: editedNote.text,
                    })
                  }
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Note&apos;s Text</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  defaultValue={editedNote.text}
                  placeholder="Text"
                  type="text"
                  onChange={(event) =>
                    setEditedNote({
                      ...note,
                      title: editedNote.title,
                      text: event.currentTarget.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="flex flex-row-reverse gap-4 pt-8">
              <label
                className="btn btn-success"
                htmlFor={`modal-edit-${index}`}
                disabled={!editedNote.title || !editedNote.text}
                onClick={handleSaveButton}
              >
                Save
              </label>
              <label
                className="btn btn-outline"
                htmlFor={`modal-edit-${index}`}
              >
                Cancel
              </label>
            </div>
          </label>
        </label>
      </div>
    </>
  );
};

export default EditModal;
