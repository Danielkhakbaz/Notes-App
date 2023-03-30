const DeleteModal = () => {
  return (
    <>
      <input id="modal-delete" className="modal-toggle" type="checkbox" />
      <label className="modal cursor-pointer" htmlFor="modal-delete">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Are you sure about deleting this note?
          </h3>
          <div className="flex flex-row-reverse gap-4 pt-8">
            <label className="btn btn-error">Delete</label>
            <label className="btn btn-outline" htmlFor="modal-delete">
              Cancel
            </label>
          </div>
        </label>
      </label>
    </>
  );
};

export default DeleteModal;
