import { Fragment } from "react";
import LayoutItem from "app/notes/layout/layout-item";
import EditModal from "components/modals/edit-modal/edit-modal";
import DeleteModal from "components/modals/delete-modal/delete-modal";
import AddModal from "components/modals/add-modal/add-modal";

const LayoutContainer = ({ notes }) => {
  return (
    <>
      <div
        className="grid gap-3 py-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, 300px)",
          justifyContent: "center",
        }}
      >
        {notes?.map((note, index) => (
          <Fragment key={note.id}>
            <LayoutItem note={note} index={index} />
            <EditModal note={note} index={index} />
            <DeleteModal />
          </Fragment>
        ))}
        <AddModal />
      </div>
    </>
  );
};

export default LayoutContainer;
