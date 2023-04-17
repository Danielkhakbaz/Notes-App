import { Fragment } from "react";
import NoteItem from "app/notes/note/note-item";
import AddModal from "app/components/modals/add-modal/add-modal";

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
            <Fragment key={note.id}>
              <NoteItem note={note} index={index} />
            </Fragment>
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
