interface Props {
  showModal: any;
  handleClose: any;
  handleEditTags: any;
}

let TagsDelete = ({ showModal, handleClose, handleEditTags }: Props) => {
  return (
    <>
      <div className={`modalEditTags ${showModal ? "showModalEditTags" : ""}`}>
        <div id="modelEditTags">
          <div className="headerModalTags row">
            <div className="col">
              <h4 className="">Chỉnh sửa thẻ</h4>
            </div>
            <div className="col-2 exitModalEditTags" onClick={handleClose}>
              <i className="bi bi-x-lg "></i>
            </div>
          </div>

          <div className="middleModalTags">
            <div className="mt-2">
              <p>Are you sure you want to delete the tag</p>
              <p>
                Deleting the tag will remove it from any/all objects in the
                project.<strong>This action cannot be undone</strong>
              </p>
            </div>
          </div>

          <div className="footerModelTags">
            <hr />
            <div className="btnsTagEdit">
              <button className="cancelTagsBtn" onClick={handleClose}>
                Hủy
              </button>
              <button className="editTagsBtn" onClick={handleEditTags}>
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TagsDelete;
