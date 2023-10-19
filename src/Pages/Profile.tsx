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
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <div className="container text-center">
                    {/* Thông tin cơ bản - Begin*/}
                    <div className="row" id="basicIf">
                      <h4>Thông tin cơ bản</h4>

                      <div className="imgUser">
                        <img src="" alt="" />
                      </div>
                      <div className="infor">
                        <div className="half mb-4">
                          <label htmlFor="">Tên (bắt buộc)</label>
                          <br />
                          <input type="text" name="" id="" />
                        </div>

                        <div className="half mb-4">
                          <label htmlFor="">Họ (bắt buộc)</label>
                          <br />
                          <input type="text" name="" id="" />
                        </div>

                        <div className="emailUser">
                          <div id="left50">
                            <label htmlFor="">Họ (bắt buộc)</label>
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Thông tin cơ bản - End*/}

                    {/* Thông tin liên hệ */}
                  </div>
                </div>
                <div className="col">Column</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
