const EditModal = ({ note, index }) => {
  return (
    <>
      <input
        id={`modal-edit-${index}`}
        className="modal-toggle"
        type="checkbox"
      />
      <label htmlFor={`modal-edit-${index}`} className="modal cursor-pointer">
        <label className="modal-box flex flex-col gap-2 relative" htmlFor="">
          <h3 className="font-bold text-2xl text-center">{note.title}</h3>
          <div className="flex flex-col gap-2">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Note&apos;s Title</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                defaultValue={note?.title}
                type="text"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Note&apos;s Text</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                defaultValue={note.text}
                placeholder="Bio"
              />
            </div>
          </div>
          <div className="flex flex-row-reverse gap-4 pt-8">
            <label className="btn btn-success">Save</label>
            <label className="btn btn-outline" htmlFor={`modal-edit-${index}`}>
              Cancel
            </label>
          </div>
        </label>
      </label>
    </>
  );
};

export default EditModal;
