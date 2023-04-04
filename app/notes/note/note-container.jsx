import React from "react";
import NoteItem from "app/notes/note/note-item";
import EditModal from "components/modals/edit-modal/edit-modal";
import DeleteModal from "components/modals/delete-modal/delete-modal";
import AddModal from "components/modals/add-modal/add-modal";

const NoteContainer = ({ notes }) => {
  return (
    <>
      <div
        className="grid gap-3 py-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, 300px)",
          justifyContent: "center",
        }}
      >
        {notes?.length ? (
          notes.map((note, index) => (
            <React.Fragment key={note.id}>
              <NoteItem note={note} index={index} />
              <EditModal note={note} index={index} />
              <DeleteModal />
            </React.Fragment>
          ))
        ) : (
          <p className="text-xl">No notes yet...</p>
        )}
        <AddModal />
      </div>
    </>
  );
};

export default NoteContainer;
