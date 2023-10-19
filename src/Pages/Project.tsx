import Nav from "../components/Nav";
import LeftNav from "../components/LeftNav";
import SubNav from "../components/SubNav";
import ListItem from "../components/ListItem";
import data from "../API_Logic/apiProject";
import { useState } from "react";

let Project = () => {
  const [showOption, setShowoption] = useState(false);

  const handleShowOption = () => {
    setShowoption(true);
  };

  const handleHideOption = () => {
    setShowoption(false);
  };
  return (
    <>
      <Nav />
      <div className="">
        <LeftNav />
        <div className="container" id="showFolder">
          <SubNav titleBtn="New" titleNav="Project" />
          <ListItem projects={data} showRightBar={handleShowOption} />
        </div>

        {showOption && (
          <div id="right">
            <div id="wrap">
              <h4>haha</h4>
              <i
                className="bi bi-x-lg"
                id="exit"
                onClick={handleHideOption}
              ></i>
              <i className="bi bi-pencil-fill" id="edit"></i>
            </div>
            <hr />
          </div>
        )}
      </div>
    </>
  );
};

export default Project;
