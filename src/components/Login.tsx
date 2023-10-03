import { Fragment } from "react";
import { Route, Routes, Link } from "react-router-dom";
import MainApp from "./Main";

let Login = () => {
  return (
    <Fragment>
      <div id="bgImg">
        <div className="formLog">
          <h3>Đăng nhập</h3>
          <div className="form-floating m>b-3" id="">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label form="floatingInput">Tên đăng nhập</label>
          </div>
          <div className="form-floating" id="">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label form="floatingPassword">Mật khẩu</label>
          </div>

          <div className="d-flex justify-content-between">
            <p>
              <a className="link-opacity-100" href="#">
                Đăng kí nhanh
              </a>
            </p>
            <p>
              <a className="link-opacity-100" href="#">
                Quên mật khẩu
              </a>
            </p>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto" id="btn-log">
            <button className="btn btn-primary" type="button">
              <Link to="/Home" className="link-light">
                Đăng nhập
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
