import Nav from "../components/Nav";
import SubNav from "../components/SubNav";
import ModalCreate from "../components/ModalCreate";
import ListItem from "../components/ListItem";
import None from "../components/None";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Project {
  ProjectName: string;
  StartDate: Date;
  FinishDate: Date;
}

let MainApp = () => {
  let token = localStorage.getItem("userData");

  const [projects, setProjects] = useState<Project[]>([]); // Chứa danh sách các dự án

  const [project, setProject] = useState({}); //   Chứa dữ liệu của dự án:

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const navigate = useNavigate();

  const toProject = (e: React.MouseEvent<HTMLElement>) => {
    let projectId = e.currentTarget.id;
    localStorage.setItem("projectId", projectId);
    navigate(`/project/:${projectId}/`);
  };

  const handleCreateProject = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(project),
      });

      if (response.ok) {
        const data = await response.json();
        let dataProject = data.metadata;
        console.log("Add new project successful:", data);
        setProjects((prev: any) => [...prev, dataProject]);
        setShowModal(!showModal);
      } else {
        const errorData = await response.json();
        console.error("Add new tag failed:", errorData);
        console.log(projects);
      }
    } catch (error) {
      console.error("Error during registration:", error);
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
            <ListItem project={projects} eventClick={toProject} />
          )}
        </div>
      </div>
      {showModal && (
        <ModalCreate
          showModal={showModal}
          handleClose={toggleModal}
          handleInputChange={handleInputChange}
          handleCreateProject={handleCreateProject}
        />
      )}
    </>
  );
};

export default MainApp;
