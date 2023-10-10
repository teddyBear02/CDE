// import Button from "./Button";
let ModalCreate = () => {
  return (
    <>
      <div className="modalNew">
        <div id="boxModal">
          <div id="titleModal">
            <h2>Dự án mới</h2>
            <p id="des">Điền những thông tin của dự án:</p>
          </div>

          <div id="detail">
            <label>Tên dự án:</label>
            <br />
            <input
              type="text"
              name=""
              id="inp_name"
              placeholder="Nhập tên dự án"
            />
            <br />
            <label>Mô tả dự án:</label>
            <br />
            <textarea name="" id=""></textarea>
            <br />
            <label>Ngày bắt đầu:</label>
            <br />
            <input type="date" />
            <br />
            <label>Ngày kết thúc:</label>
            <br />
            <input type="date" />
          </div>

          <div id="modalBtn">
            <button className="btns" id="calPj">
              Hủy
            </button>
            <button className="btns" id="created">
              Tạo mới
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCreate;
