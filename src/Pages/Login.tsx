import { Link } from "react-router-dom";
import Button from "../components/Button";
let Login = () => {
  const handleLog = () => {};

  return (
    <>
      <div className="bgImg">
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
              <Link
                to={"http://localhost:5173/Register"}
                className="link-opacity-100"
              >
                Đăng kí nhanh
              </Link>
            </p>
            <p>
              <Link
                to={"http://localhost:5173/ForgotPass"}
                className="link-opacity-100"
              >
                Quên mật khẩu
              </Link>
            </p>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto" id="btn-log">
            <Button title="Đăng nhập" myEvent={handleLog} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
