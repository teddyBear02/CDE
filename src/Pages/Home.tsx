import Nav from "../components/Nav";
import SubNav from "../components/SubNav";
import ModalCreate from "../components/ModalCreate";
import ListItem from "../components/ListItem";
import None from "../components/None";
import { useState } from "react";
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
  let a = 1;
  console.log(a == 1 ? false : true);
  console.log(projects);

  return (
    <>
      <div className="main">
        <Nav />
        <div className="toRender container">
          <SubNav titleNav="Dự án" titleBtn="New" event={toggleModal} />
          {projects.length === 0 ? <None /> : <ListItem projects={projects} />}
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
