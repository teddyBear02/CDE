import Nav from "../components/Nav";
import SubNav from "../components/SubNav";
import ModalCreate from "../components/ModalCreate";
import ListItem from "../components/ListItem";
import { useState } from "react";
let MainApp = () => {
  const [projects, setProjects]: any = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleCreateProject = (projectName: any) => {
    setProjects([...projects, projectName]);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="main">
        <Nav />
        <div className="toRender container">
          <SubNav titleNav="Dự án" titleBtn="New" event={openModal} />
          <ListItem projects={projects} showRightBar={console.log(123)} />
        </div>
      </div>
      {showModal && (
        <ModalCreate
          showModal={showModal}
          handleClose={closeModal}
          handleCreateProject={handleCreateProject}
        />
      )}
    </>
  );
};

export default MainApp;
