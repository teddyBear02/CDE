// import LeftNav from "../components/LeftNav";
import Nav from "../components/Nav";
import SubNav from "../components/SubNab";
import ModalCreate from "../components/ModalCreate";
import ListItem from "../components/ListItem";
let MainApp = () => {
  return (
    <>
      <div id="main">
        <Nav />
        <div id="toRender" className="container">
          <SubNav />
          <ListItem />
        </div>
      </div>
      <ModalCreate />
    </>
  );
};

export default MainApp;
