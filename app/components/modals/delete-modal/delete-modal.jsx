import { useRouter } from "next/navigation";

const DeleteModal = ({ note, index }) => {
  const router = useRouter();

  const handleDeleteButton = () => {
    localStorage.setItem(
      "notes",
      JSON.stringify(
        JSON.parse(localStorage.getItem("notes")).filter(
          (item) => item.id !== note.id
        )
      )
    );

    router.refresh();
  };

  return (
    <>
      <input
        id={`modal-delete-${index}`}
        className="modal-toggle"
        type="checkbox"
      />
      <label className="modal cursor-pointer" htmlFor={`modal-delete-${index}`}>
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Are you sure about deleting this note?
          </h3>
          <div className="flex flex-row-reverse gap-4 pt-8">
            <button className="btn btn-error" onClick={handleDeleteButton}>
              Delete
            </button>
            <button
              className="btn btn-outline"
              htmlFor={`modal-delete-${index}`}
            >
              Cancel
            </button>
          </div>
        </label>
      </label>
    </>
  );
};

export default DeleteModal;
