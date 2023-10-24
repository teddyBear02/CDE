import Nav from "../components/Nav";
import LeftNav from "../components/project_component/LeftNav";
import ListProject from "../components/project_component/ListProject";
import Activity from "../components/project_component/Activity";
import Todo from "../components/project_component/Todo";
import Team from "../components/project_component/Team";
import { Route, Routes } from "react-router-dom";

let Project = () => {
  return (
    <>
      <Nav />
      <div id="wrapperProject">
        <LeftNav />
        <Routes>
          <Route path="/" element={<ListProject />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </>
  );
};

export default Project;
