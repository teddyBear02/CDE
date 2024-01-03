import Nav from "../components/Nav";
import LeftNav from "../components/project/LeftNav";
import routesProject from "../routes/routesProject";
import { Route, Routes } from "react-router-dom";

let Project = () => {
  return (
    <>
      <Nav />
      <div id="wrapperProject">
        <LeftNav />

        <Routes>
          {routesProject.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </div>
    </>
  );
};

export default Project;
