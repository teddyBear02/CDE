// import LeftNav from "../components/LeftNav";
import Nav from "../components/Nav";
import SubNav from "../components/SubNab";
import ModalCreate from "../components/ModalCreate";
import ListItem from "../components/ListItem";
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
          <SubNav />
          <ListItem />
        </div>
      </div>
      {showModal && <ModalCreate />}
    </>
  );
};

export default MainApp;
