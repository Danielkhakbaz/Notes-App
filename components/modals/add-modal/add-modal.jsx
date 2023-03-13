const AddModal = () => {
  return (
    <>
      <input id="modal-add" className="modal-toggle" type="checkbox" />
      <label className="modal cursor-pointer" htmlFor="modal-add">
        <label className="modal-box flex flex-col gap-2 relative" htmlFor="">
          <h3 className="font-bold text-2xl text-center">Add a new Note</h3>
          <div className="flex flex-col gap-2">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Note&apos;s Title</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                placeholder="Type the note's title in here..."
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Note&apos;s Text</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Type the note's text in here..."
              />
            </div>
          </div>
          <div className="flex flex-row-reverse gap-4 pt-8">
            <label className="btn btn-success">Save</label>
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
