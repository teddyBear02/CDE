import Nav from "../components/Nav";
import SubNav from "../components/SubNav";
import ModalCreate from "../components/ModalCreate";
import ListItem from "../components/ListItem";
import None from "../components/None";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let MainApp = () => {
  const [projects, setProjects]: any = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(1);

  const handleCreateProject = (namePj: any) => {
    setProjects([...projects, { id: id, name: namePj }]);
    setId(id + 1);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const navigate = useNavigate();
  const toProject = () => {
    if (true) {
      navigate("/project");
    }
  };
  return (
    <>
      <div className="main">
        <Nav />
        <div className="toRender container">
          <SubNav titleNav="Dự án" titleBtn="Tạo dự án" event={toggleModal} />
          {projects.length === 0 ? (
            <None
              title="Hiện tại chưa có dự án nào"
              subTitle="Ấn nút tạo mới để tạo dự án"
            />
          ) : (
            <ListItem projects={projects} showRightBar={toProject} />
          )}
        </div>
      </div>
      {showModal && (
        <ModalCreate
          showModal={showModal}
          handleClose={toggleModal}
          handleCreateProject={handleCreateProject}
        />
      )}
    </>
  );
};

export default MainApp;
