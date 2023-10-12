import Nav from "../components/Nav";
import SubNav from "../components/SubNav";
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
      <div className="main">
        <Nav />
        <div className="toRender container">
          <SubNav titleNav="Dự án" titleBtn="New" event={handleShowModal} />
          <ListItem />
        </div>
      </div>
      {showModal && <ModalCreate />}
    </>
  );
};

export default MainApp;
