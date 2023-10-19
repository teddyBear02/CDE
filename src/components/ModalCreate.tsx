import { useState } from "react";
import Button from "./Button";
// import data from "../API_Logic/apiProject";

interface Props {
  showModal: any;
  handleClose: any;
  handleCreateProject: any;
}
let ModalCreate = ({ showModal, handleClose, handleCreateProject }: Props) => {
  const [projectName, setProjectName] = useState("");
  const handleProjectNameChange = (e: any) => {
    setProjectName(e.target.value);
  };

  const handleCreateClick = () => {
    handleCreateProject(projectName);
    handleClose();
  };
  return (
    <>
      <div className={`modalNew ${showModal ? "show" : ""}`}>
        <div id="boxModal">
          <div id="titleModal">
            <h2>
              Dự án mới <i className="bi bi-x-lg" onClick={handleClose}></i>
            </h2>
            <p id="des">Điền những thông tin của dự án:</p>
          </div>

          <form id="detail">
            <label>Tên dự án:</label>

            <input
              type="text"
              placeholder="Tên dự án"
              value={projectName}
              onChange={handleProjectNameChange}
            />

            <label>Ngày bắt đầu:</label>

            <input type="date" />

            <label>Ngày kết thúc:</label>

            <input type="date" />
          </form>
          <div id="modalBtn">
            <Button
              title="Hủy"
              subClass={"btns"}
              idBtn={"cancel"}
              myEvent={handleClose}
            ></Button>
            <Button
              title="Tạo mới"
              subClass={"btns"}
              idBtn={"created"}
              myEvent={handleCreateClick}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCreate;
