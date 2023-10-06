import { useState } from "react";
import Button from "./Button";
let SubNav = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="subNav">
        <div className="container-fluid ">
          <span className="navbar-brand">Dự án</span>
          <span className="navbar-text">
            <Button tiltle="New" />
          </span>
        </div>
      </nav>
    </>
  );
};

export default SubNav;
