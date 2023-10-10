import Nav from "../components/Nav";
// import SubNav from "../components/SubNab";
import ModalCreate from "../components/ModalCreate";
import ListItem from "../components/ListItem";
import Button from "../components/Button";
import { useState } from "react";
let MainApp = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div id="main">
        <Nav />
        <div id="toRender" className="container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary" id="subNav">
            <div className="container-fluid ">
              <span className="navbar-brand">Dự án</span>
              <span className="navbar-text">
                <Button tiltle="New" myEvent={handleShowModal} />
              </span>
            </div>
          </nav>
          <ListItem />
        </div>
      </div>
      {showModal && <ModalCreate />}
    </>
  );
};

export default MainApp;
