import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import routesProject from "./routesProject";

let LeftNav = () => {
  const sidePages = ["Dữ liệu", "Hoạt động", "Việc cần làm", "Đội nhóm"];
  const sidePaths = ["", "activity", "todo", "team"];
  const [type, setType] = useState(sidePages[0]);

  return (
    <>
      <div id="leftNav">
        <ul className="nav flex-column">
          {sidePages.map((sPage, index) => {
            let iconBar;
            let path;
            if (index === 0) {
              iconBar = <i className="bi bi-folder-fill"></i>;
              path = "";
            } else if (index === 1) {
              iconBar = <i className="bi bi-clock-history"></i>;
              path = "activity";
            } else if (index === 2) {
              iconBar = <i className="bi bi-clipboard-check-fill"></i>;
              path = "todo";
            } else if (index === 3) {
              iconBar = <i className="bi bi-people-fill"></i>;
              path = "team";
            }

            return (
              <Link
                className="nav-item"
                key={sPage}
                onClick={() => {
                  setType(sPage);
                }}
                style={type === sPage ? { backgroundColor: "#0c77be" } : {}}
                to={`/project/${path}`}
              >
                <a className="nav-link ">
                  {iconBar}
                  {sPage}
                </a>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default LeftNav;
