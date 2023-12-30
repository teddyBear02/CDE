interface Props {
  deleteAll: any;
}

let TagsDeleteAll = ({ deleteAll }: Props) => {
  return (
    <>
      <div className="dropdown-pane" id="deteleAllTags">
        <p onClick={deleteAll}>Xóa tất cả</p>
      </div>
    </>
  );
};

export default TagsDeleteAll;
