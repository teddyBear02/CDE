import Nav from "../components/Nav";
import SubNav from "../components/SubNav";
let Profile = () => {
  return (
    <>
      <div className="main">
        <Nav />
        <div className="container-fluid toRender">
          <div className="container-md">
            <SubNav titleNav="Profile" titleBtn="Save" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
