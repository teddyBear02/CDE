import NoneProject from "./NoneProject";
import Button from "./Button";

function Project() {
  return (
    <>
      <div className="container" id="contPj">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarText">
              <span className="navbar-brand me-auto mb-2 mb-lg-0">Dự án</span>

              <span className="navbar-text" id="crNew">
                <Button tiltle="New" />
              </span>

              <span className=""></span>
            </div>
          </div>
        </nav>
        <div id="Render">
          <NoneProject />
        </div>
      </div>
    </>
  );
}

export default Project;
