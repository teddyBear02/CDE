import Nav from "../components/Nav";
import LeftNav from "../components/project/LeftNav";
import ListProject from "../components/project/ListProject";
import Activity from "../components/project/Activity";
import Todo from "../components/project/todo/Todo";
import Team from "../components/project/Team";
import Tags from "../components/project/setting/Tags";
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
          <Route path="/setting/tags" element={<Tags />} />
          {/* <Route path="/settings/privacy" element={</>}/> */}
        </Routes>
      </div>
    </>
  );
};

export default Project;
